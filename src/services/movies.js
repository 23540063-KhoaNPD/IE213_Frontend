import axios from "axios";

const API_URL = process.env.VITE_API_BASE_URL || "http://localhost:8080";

class MovieDataSerive {

    getAll(page = 0) {
        return axios.get(`${API_URL}/api/v1/movies?page=${page}`)
    }

    get(id) {
        console.log(`mv id: ${id}`)
        return axios.get(`${API_URL}/api/v1/movies/id/${id}`)
    }

    find(query, by = "title", page = 0) {
        return axios.get(
            `${API_URL}/api/v1/movies?${by}=${query}&page=${page}`)
    }

    createReview(data) {
        return axios.post(`${API_URL}/api/v1/movies/review`, data)
    }

    updateReview(data) {
        return axios.put(`${API_URL}/api/v1/movies/review`, data)
    }

    deleteReview(id, userId) {
        return axios.delete(
            `${API_URL}/api/v1/movies/review`,
            { data: { review_id: id, user_id: userId } })
    }

    getRatings() {
        return axios.get(`${API_URL}/api/v1/movies/ratings`)
    }
}

export default new MovieDataSerive();