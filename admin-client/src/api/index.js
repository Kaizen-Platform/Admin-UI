import axios from 'axios'

const url = "https://localhost:5000/ideas";

export const fetchPosts = () => axios.get(url);

