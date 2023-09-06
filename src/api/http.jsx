
import axios from "axios";

const baseURL = "https://myschoolapp.onrender.com";


const privateHttp = axios.create({
    baseURL: baseURL,

})

const publicHttp = axios.create({
    baseURL: baseURL,
})

export {
    privateHttp,
    publicHttp
};