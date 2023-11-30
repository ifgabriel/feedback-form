import axios, { AxiosResponse } from 'axios'
import { HttpRequest, HttpResponse, HttpClient } from './../data/protocols'

export function AxiosHttpClient(): HttpClient {
  const instance = axios.create()

  const request = async (data: HttpRequest): Promise<HttpResponse> => {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await instance.request({
        url: data.url,
        data: data.body,
        method: data.method,
      })
    } catch (error) {
      axiosResponse = error?.response
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse.data,
    }
  }

  return { request }
}
