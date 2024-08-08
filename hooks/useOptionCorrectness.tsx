import { useMutation } from "react-query";
import axios from "axios";

export const useOptionCorrectness = () => {
  return useMutation((id: String) => {
    return axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/problem/options/${id}`
    );
  });
};
