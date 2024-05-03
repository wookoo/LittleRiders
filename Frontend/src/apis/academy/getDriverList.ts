import axiosInstance from '@utils/httpCommons'

import API from '@constants/api'

export const getDriverList = async () => {
  const response = await axiosInstance.get(
    `${API.BASE_URL}/${API.GET_DRIVER_LIST}`,
  )

  return response
}
