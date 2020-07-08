const axios = require('axios')

const BASE_URL = 'http://api.giphy.com/v1/gifs/search';

module.exports = {

  async getRecipeGiphy(title) {
    try {
      const response = await axios(BASE_URL, {
        params: {
          api_key: process.env.GIPHY_API_KEY,
          q: title
        }
      });

      return response.data.data[0].images.downsized_large.url;
    } catch(err) {
      throw new Error(err);
    }
  }
}