import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const Interceptor = config => {
    config.headers['Content-Type'] = 'application/json';
    return config
}

instance.interceptors.request.use(Interceptor)

export {
    instance
}