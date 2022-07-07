import {axios} from '../../utils/axios'
import {loginEntity} from './types'
import * as qs from 'qs'

const baseUrl = '/api'

// 获取验证码
export const getVerify = () => {
    return axios({
        method: 'GET',
        url: baseUrl + '/getVerify'
    })
}

// 登录处理
export const login = (data: loginEntity) => {
    return axios({
        method: 'POST',
        url: baseUrl + '/login',
        data: qs.stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}