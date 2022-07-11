import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {ElMessage, ElNotification} from 'element-plus'
import {useRouter} from 'vue-router'
import * as nProgress from 'nprogress'
import {useMainStore} from '../store'

const router = useRouter()

axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    withCredentials: true
})

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    nProgress.start()
    if (useMainStore().getAuthorization && localStorage.getItem('Authorization')) {
        if (config.headers) {
            config.headers.Authorization = useMainStore().getAuthorization
        }
    }
    return config;
}, ((error: any) => {
    ElNotification.error('请求错误！')
    return Promise.reject(error);
}))

axios.interceptors.response.use(async (response: AxiosResponse) => {
    nProgress.done()
    switch (response.status as number) {
        case 200 || 201:
            return response;
        case 401:
            ElMessage.warning('您未登录')
            await router.push('/login')
            break
        case 403:
            ElMessage.warning('无权访问')
            break
        case 500:
            ElMessage.error('服务器异常')
            break
        default:
            ElNotification.error('未知异常')
    }

}, ((error: any) => {
        ElNotification.error('响应错误！')
        return Promise.reject(error);
    }
))

export default axios