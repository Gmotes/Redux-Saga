import axios from 'axios';

/** 
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON form for POST requests
 * @param {object} params (optional) data in the url for GET requests
*/
export const callApi = async (method, path, data, params) => {
  const res = await axios({
    method,
    url: "http://localhost:5000/" + path,
    data,
    params,
  });
  return res;
}