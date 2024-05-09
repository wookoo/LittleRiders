import { useEffect } from 'react'

import { MapOverlay } from '@components/Dispatch'

import { MapHook } from '@hooks/map'

import { BASE_LAT, BASE_LNG } from '@constants'

interface Props {
  mapRef: React.RefObject<naver.maps.Map>
  mapDiv: React.RefObject<HTMLDivElement>
  selectedRouteId: number
  isOverlayOpen: boolean
  handleAddButton: () => void
  handleCloseButton: () => void
}

export default function NaverMap({
  mapDiv,
  mapRef,
  selectedRouteId,
  isOverlayOpen,
  handleAddButton,
  handleCloseButton,
}: Props) {
  const { initMap } = MapHook(mapRef)
  useEffect(() => {
    initMap(mapDiv, {
      center: new naver.maps.LatLng(BASE_LAT, BASE_LNG),
      zoom: 15,
      minZoom: 7,
      zoomControl: false,
      disableKineticPan: true,
      disableDoubleClickZoom: true,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div
      id="map"
      className={`flex max-h-full w-full items-center justify-center transition-all duration-500 ease-in-out max-2xl:w-full ${selectedRouteId === -1 ? 'pr-0' : 'mr-[674px]'}`}
      ref={mapDiv}
    >
      {isOverlayOpen && (
        <>
          <img
            className="absolute z-10 mb-8 self-center transition-all ease-in-out hover:mb-12 hover:size-14"
            src="/src/assets/image/map-center-icon.svg"
            width={40}
            onClick={handleAddButton}
          />
          <MapOverlay mapRef={mapRef} handleCloseButton={handleCloseButton} />
        </>
      )}
    </div>
  )
}
