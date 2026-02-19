import { useErrorsStore } from '../../stores/errors'

const STATUS_SERVER_ERROR = 500
const STATUS_PERMISSION_DENIED = 403

export function errors(http) {
  http.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { addError } = useErrorsStore()

      if (error.response?.status === STATUS_SERVER_ERROR) {
        addError({ message: 'Server error', status: error.response.status })
      }
      if (error.response?.status === STATUS_PERMISSION_DENIED) {
        addError({ message: 'Permission denied', status: error.response.status })
      }

      return Promise.reject(error)
    },
  )
}
