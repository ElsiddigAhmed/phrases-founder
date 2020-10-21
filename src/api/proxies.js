import axios from "axios";
const url = "https://safe-inlet-22197.herokuapp.com";
// const url = "http://localhost:1234";
export const getData = async (route = "/") => {
  try {
    const { data } = await axios.get(url + route);

    return data;
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
