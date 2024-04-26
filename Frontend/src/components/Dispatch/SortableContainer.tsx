import SortableItem from '@components/Dispatch/SortableItem'

import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Station } from '@types'

interface Props {
  id: string
  items: Station[]
  subject: string
  isLoading: boolean
  isPending?: boolean
}

/**
 *
 * @param id sortableContainer를 특정할 id
 * @param items 표시할 데이터 items
 * @param subject 박스 위에 표시할 제목
 */
export default function SortableContainer({
  id,
  items,
  subject,
  isLoading,
  isPending = true,
}: Props) {
  const { setNodeRef } = useDroppable({ id })

  if (isLoading || isPending || !items) {
    return (
      <div className="m-5 flex-row p-1">
        <p className="m-1 text-xl font-bold">
          {subject ? subject : '임시 제목'}
        </p>
        <div
          ref={setNodeRef}
          className="h-5/6 w-80  overflow-y-scroll rounded-md border bg-lightgreen p-1 shadow-md"
        >
          선택된 노선이 없습니다.
        </div>
      </div>
    )
  }
  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div className="m-5 flex-row p-1">
        <p className="m-1 text-xl font-bold">
          {subject ? subject : '임시 제목'}
        </p>
        <div
          ref={setNodeRef}
          className="h-5/6 w-80  overflow-y-scroll rounded-md border bg-lightgreen p-1 shadow-md"
        >
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    </SortableContext>
  )
}
