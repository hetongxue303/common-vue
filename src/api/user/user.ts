import axios from '../../utils/request'
import {loginEntity} from './types'
import * as qs from 'qs'

const baseAPI = import.meta.env.VITE_BASE_API

// 获取验证码
export const getVerify = () => {
    return axios({
        method: 'GET',
        url: baseAPI + '/getVerify'
    })
}

// 登录处理
export const login = (data: loginEntity) => {
    return axios({
        method: 'POST',
        url: baseAPI + '/login',
        data: qs.stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// 注销处理
export const logout = () => {
    return axios({
        method: 'GET',
        url: baseAPI + '/logout'
    })
}