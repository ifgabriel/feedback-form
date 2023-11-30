import { HttpResponse } from '../data/protocols'

import { AxiosHttpClient } from '../infra'

type Get = <P, R>(uri: string, params?: P) => Promise<HttpResponse<R>>
type Post = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Put = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>
type Patch = <P, R>(uri: string, data?: P) => Promise<HttpResponse<R>>

function API() {
  const axios = AxiosHttpClient()
  const URL = 'https://h3b5z9si3j.execute-api.us-east-2.amazonaws.com/dev'

  const get: Get = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'get',
    })

  const put: Put = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'put',
    })

  const patch: Patch = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'patch',
    })

  const post: Post = (path, params) =>
    axios.request({
      url: `${URL}${path}`,
      body: params,
      method: 'post',
    })

  return {
    get,
    put,
    patch,
    post,
  }
}

export const Api = API()
