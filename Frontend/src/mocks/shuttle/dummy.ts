export const DUMMY_DRIVE_HISTORY = (id: number) => {
  return [
    {
      등원: {
        노선이름: 'B코스',
        정류장리스트: [
          {
            정류장이름: '늘푸른1차',
            위도: 37.359924641705476,
            경도: 127.1148204803467,
          },
          {
            정류장이름: '늘푸른2차',
            위도: 37.36343797188166,
            경도: 127.11486339569092,
          },
        ],
        원생승하차지점: [
          { 이름: '김민준', 위도: 37.359924641705476, 경도: 127.1148204803468 },
        ],
      },
      하원: {
        노선이름: 'A코스',
        정류장리스트: [
          {
            정류장이름: '늘푸른3차',
            위도: 37.368520071054576,
            경도: 127.11473464965819,
          },
          {
            정류장이름: '늘푸른4차',
            위도: 37.378546827477855,
            경도: 127.11984157562254,
          },
        ],
        원생승하차지점: [
          { 이름: '김민준', 위도: 37.359924641705476, 경도: 127.1148204803468 },
        ],
      },
    },
    {
      하원: {
        노선이름: 'B코스',
        정류장리스트: [
          {
            정류장이름: '늘푸른1차',
            위도: 37.359924641705476,
            경도: 127.1148204803467,
          },
          {
            정류장이름: '늘푸른2차',
            위도: 37.36343797188166,
            경도: 127.11486339569092,
          },
        ],
        원생승하차지점: [
          { 이름: '김민준', 위도: 37.359924641705476, 경도: 127.1148204803468 },
        ],
      },
      등원: {
        노선이름: 'A코스',
        정류장리스트: [
          {
            정류장이름: '늘푸른3차',
            위도: 37.368520071054576,
            경도: 127.11473464965819,
          },
          {
            정류장이름: '늘푸른4차',
            위도: 37.378546827477855,
            경도: 127.11984157562254,
          },
        ],
        원생승하차지점: [
          { 이름: '김민준', 위도: 37.359924641705476, 경도: 127.1148204803468 },
        ],
      },
    },
  ][id % 2]
}

/**
 * 날짜id, 운행정보 id 전달
 *
 */

export const 운행기록 = [
  { time: '2022-01-14' },
  { time: '2022-01-14' },
  { time: '2022-01-14' },
]

export const 운행정보 = [
  { id: 0, routeName: 'A노선', startTime: '12:24', endTime: '13:35' },
  { id: 1, routeName: 'A노선', startTime: '12:24', endTime: '11:11' },
]

export const HistoryDetail = {
  driver: {
    name: '김기사',
    phone: '010123456778',
  },
  teacher: {
    name: '햄버거',
    phone: '01012345',
  },
  shuttle: {
    name: '1호차',
    licenseNumber: 'asdasd',
  },
  locationList: [
    {
      speed: '30',
      latitude: 37.368520071054576,
      longitude: 127.11473464965819,
    },
    {
      speed: '40',
      latitude: 37.368520071054576,
      longitude: 127.11473464965819,
    },
  ],
  childList: [
    {
      id: 0,
      name: '김민준',
      time: 'string',
      latitude: 37.378546827477855,
      longitude: 127.11984157562254,
    },
    {
      id: 1,
      name: '김곤우',
      time: 'string',
      latitude: 37.378546827477855,
      longitude: 127.11984157562254,
    },
  ],
}
