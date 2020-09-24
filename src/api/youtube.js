import axios from "axios";

const KEY = "AIzaSyCltcSAkYe3n7dYup - c54h51oxRKcxuFRY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 5,
  },
});
