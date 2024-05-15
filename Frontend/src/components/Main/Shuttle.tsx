import { useEffect, useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

import { useSetRealTimeMap } from '@hooks/main/realTimeMap'

import {
  AcademyShuttle,
  BoardInfo,
  InitData,
  InitDataLocationInfo,
  LocationInfo,
} from '@types'

interface Props {
  shuttleId: number
  shuttleInfo: AcademyShuttle
  realTimeMap: naver.maps.Map
  isSelected: boolean
}

export default function Shuttle({
  shuttleId,
  shuttleInfo,
  realTimeMap,
  isSelected,
}: Props) {
  const curLocationInfo = useRef<LocationInfo | InitDataLocationInfo>()

  const {
    polyline,
    drawRealTimeMarker,
    drawPolylineWithList,
    setDirection,
    initPolyline,
    drawBoardMarker,
  } = useSetRealTimeMap()

  const { data: locationInfo } = useQuery<LocationInfo>({
    queryKey: ['locationInfo', shuttleId],
  })

  const { data: initData } = useQuery<InitData>({
    queryKey: ['initData', shuttleId],
  })

  const { data: boardInfo } = useQuery<BoardInfo>({
    queryKey: ['boardInfo', shuttleId],
  })

  // init 데이터가 있다면, polyline을 그린다
  useEffect(() => {
    if (initData) {
      const locationList = initData.locationList

      if (locationList.length > 0) {
        locationList.sort(
          (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
        )

        const lastLocationInfo = locationList.at(-1) as InitDataLocationInfo
        curLocationInfo.current = lastLocationInfo
        drawRealTimeMarker(lastLocationInfo, realTimeMap)
      }

      initPolyline(realTimeMap)

      locationList.forEach((locationInfo) => {
        drawPolylineWithList(locationInfo, realTimeMap)
      })
    }
  }, [initData])

  // init 데이터가 있다면, board marker를 그린다
  useEffect(() => {
    if (initData) {
      const boardList = initData.boardList

      boardList.forEach((boardInfo: BoardInfo) => {
        drawBoardMarker(boardInfo, realTimeMap)
      })
    }
  }, [initData])

  // init 데이터가 있다면, drop marker를 그린다
  useEffect(() => {
    if (initData) {
      const boardList = initData.boardList

      boardList.forEach((boardInfo: BoardInfo) => {
        drawBoardMarker(boardInfo, realTimeMap)
      })
    }
  }, [initData])

  // 위치 정보가 변화하고 있다면, 실시간으로 마커를 찍는다
  useEffect(() => {
    if (locationInfo) {
      drawRealTimeMarker(locationInfo, shuttleInfo, realTimeMap)

      if (curLocationInfo.current) {
        setDirection(curLocationInfo.current, locationInfo)
      }

      curLocationInfo.current = locationInfo
    }
  }, [locationInfo])

  // 위치 정보가 변화하고 있다면, 실시간으로 polyline을 그린다
  useEffect(() => {
    if (!polyline.current) {
      initPolyline(realTimeMap)
    }
    if (locationInfo) {
      drawPolylineWithList(locationInfo, realTimeMap)
    }
  }, [locationInfo])

  // 승차 정보가 있다면, 마커를 찍는다
  useEffect(() => {
    if (boardInfo) {
      drawBoardMarker(boardInfo, realTimeMap)
    }
  }, [boardInfo])

  // 선택한 호차의 위치를 맵의 중심으로 한다
  useEffect(() => {
    if (isSelected && curLocationInfo.current) {
      if (isSelected) {
        const { latitude, longitude } = curLocationInfo.current
        const latLng = new naver.maps.LatLng(latitude, longitude)
        realTimeMap.setCenter(latLng)
      }
    }
  }, [isSelected])

  return null
}
