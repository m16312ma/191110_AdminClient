/*
    包含应用中所有请求接口的函数：请求接口函数
 */
import ajax from './ajax'

const reqUrl = ''

//请求登录
export function reqLogin( username , password ){
    ajax({
        method:'post'
        , url: reqUrl+'/login'
        , data:{
            username,
            password
        }
    })
}

const username = 'admin',
    password = 'admin';
reqLogin( username,password )









