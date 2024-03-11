import axios from "axios"

const request = axios.create({
    baseURL: "https://coder-academy-api.onrender.com"
})

export default request