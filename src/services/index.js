import axios from 'axios'

const fetchRequest = () => {
  return axios({
    method: 'get',
    url: 'https://api.covid19api.com/summary'
  })
}

export default fetchRequest
