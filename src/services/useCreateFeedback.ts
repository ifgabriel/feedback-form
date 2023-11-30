import { useMutation, useQueryClient } from 'react-query'
import { Api } from '../http'
import { endpoints } from './endpoints'

interface Params {
  feedback: number;
  image: File;
  productName: string;
  comment: string;}

const useCreateFeedback = () => {
  const client = useQueryClient()

  return useMutation((payload: Params) => Api.post(endpoints.createFeedback, payload), {
    onSuccess: () => {
      client.invalidateQueries(['get-feedbacks'])
    }
  })
}

export default useCreateFeedback
