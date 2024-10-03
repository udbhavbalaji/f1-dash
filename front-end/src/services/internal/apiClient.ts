import axios from "axios";

interface apiResponse<T> {
  status: string;
  data: T[] | undefined;
}

const internalApiClient = async <T>(url: string): Promise<apiResponse<T>> => {
  const response = await axios.get(url);
  const responseData = response.data;
  let responseObject: apiResponse<T>;
  if (!responseData) {
    responseObject = {
      status: "error",
      data: undefined,
    };
  } else {
    responseObject = {
      status: "success",
      data: responseData,
    };
  }

  return responseObject;
};

export default internalApiClient;
