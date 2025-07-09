import axios from "axios"

const request = axios.create({
    baseURL: "https://backend-coder-api.vercel.app"
})

export default request
