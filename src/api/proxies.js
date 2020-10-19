import axios from "axios";
const url = "localhost:4014/api/";
export const getData = async (route = "/") => {
  try {
    const res = await axios.get(url + route);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const postData = async (route = "/", data = {}) => {
  try {
    const res = await axios.post(url + route, data);
    return res.data;
  } catch (err) {
    return err;
  }
};
