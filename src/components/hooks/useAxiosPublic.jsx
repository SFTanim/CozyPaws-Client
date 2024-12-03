import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-eight-indol.vercel.app",
});

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
