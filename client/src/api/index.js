import axios from 'axios'

export default async function getAxiosApi(url, data) {
  return await axios({
    method: 'POST',
    url,
    data
  })
}
