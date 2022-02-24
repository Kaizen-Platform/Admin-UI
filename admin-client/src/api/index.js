import axios from 'axios'

const url = "https://localhost:5000/ideas";

export const fetchPosts = () => axios.get(url);
// export const createPost = () => axios.create({
//     baseURL: "http://localhost:8000/",
// })
export const createPost = (newPost) => axios.post(url, newPost);

