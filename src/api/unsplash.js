const axios = require("axios");

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BilFv1Pzn6lSR5PIGJ6ehgKMXo5zmSlE7JroBvoL8L4",
  },
});
