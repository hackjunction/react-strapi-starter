import axios from 'axios'
import BASE_URL from './baseUrl'

const URL = BASE_URL + '/api/eventcategories'

const EventCategoryService = {

	count: () => {
		return axios.get(`${URL}/count`).then(res => res.data)
	},

	getAll: () => {
		return axios.get(URL).then(res => res.data)
	},

	getOne: (id) => {
		return axios.get(`${URL}/${id}`).then(res => res.data)
	}
}

export default EventCategoryService