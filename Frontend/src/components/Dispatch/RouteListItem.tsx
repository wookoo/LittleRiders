import { MouseEvent, useEffect, useState } from 'react'

import { useDeleteRoute } from '@hooks/dispatch'

import { FaPencilAlt, FaRoute, FaTrashAlt } from 'react-icons/fa'

interface Props {
  id: number
  name: string
  type: string
  selectedRouteId: number
  setSelectedRouteId: React.Dispatch<React.SetStateAction<number>>
  onRouteClick: (id: number) => void
}

export default function RouteListItem({
  id,
  name,
  type,
  selectedRouteId,
  setSelectedRouteId,
  onRouteClick,
}: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const { removeRoute } = useDeleteRoute()

  // TODO Modify and Delete Feature Need to ADD
  useEffect(() => {
    setIsClicked(id === selectedRouteId)
  }, [selectedRouteId, id])

  const handleRemoveClick = (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation()
    removeRoute(id)
    setSelectedRouteId(-1)
  }

  return (
    <div
      className={`mx-4 my-2 flex h-16 items-center rounded-lg border-2 p-5 shadow-sm transition-all 
        hover:border-lightgreen
      ${isClicked ? `  border-lightgreen bg-lightgreen text-white` : ` bg-white`}`}
      onClick={() => {
        onRouteClick(id)
      }}
    >
      <FaRoute className="me-2" size={40} />
      <div className="flex items-center text-xl">
        <p className="w-44 truncate">{name} </p>
        {type === 'board' ? (
          <div className="mx-1 w-8 rounded-sm bg-darkgreen text-center text-xs text-white">
            등원
          </div>
        ) : (
          <div className="mx-1 w-8 rounded-sm bg-red bg-opacity-70 text-center text-xs text-white">
            하원
          </div>
        )}{' '}
      </div>
      <div className="flex justify-end gap-3">
        <FaPencilAlt />
        <FaTrashAlt
          className="hover:scale-125 hover:text-red active:scale-150 active:text-red"
          onClick={(e) => {
            handleRemoveClick(e)
          }}
        />
      </div>
    </div>
  )
}
