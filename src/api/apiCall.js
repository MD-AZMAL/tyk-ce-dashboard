import axios from "axios";

export const checkTykServerApi = async ({ url }) => {
  let data, error;

  const requestObject = {
    method: "GET",
    url: `${url}/hello`,
  };

  try {
    const result = await axios(requestObject);
    data = result.data;
    console.log(data);
    error = null;
  } catch (err) {
    error = err;
    console.log(err);
    data = null;
  }

  return [error, data];
};
