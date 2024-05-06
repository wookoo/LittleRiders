import { ChildInfo } from '@types'

export type Station = {
  id: number
  name: string
  latitude?: number
  longitude?: number
  visitOrder?: number
  childList?: ChildInfo[]
}

export type Route = {
  id?: number
  name: string
  stationList?: Station[]
}
