import { useQuery } from "react-query";
import { Api } from "../http";
import { endpoints } from "./endpoints";

const useGetFeedbacks = () =>
  useQuery('getFeedbacks', () =>
    Api.get(endpoints.getFeedbacks).then(({ data }) => data?.data)
  );

export default useGetFeedbacks;
