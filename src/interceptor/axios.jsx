import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json',
    Authorization: "Bearer" + " " + localStorage.getItem("token")
  }
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// instance.interceptors.response.use(
//   (response) => {
//     console.log(response.data)
//     // localStorage.setItem("token", data.accessToken);
//     if (response.status === 201) {
//       // window.location.href = "/";
//     }
//     return response;
//   },
//   (err) => {
//       console.log(err);
      
      // localStorage.clear("token");
      // window.location.href = "/signin";
    // return Promise.reject(err);
//   }
// );
export default instance 