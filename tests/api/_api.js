const { request } = require('../../config.js');

  
  class API {
  
    constructor(url) {
      this.url = url;
    }
  
  
    /**
     * Make a get request
     *
     * @function get
     * @param {String} url API 'GET' URL string.
     * @return {Response} Response from the get request.
    */
    async get(url) {
  
      return url, await request.get(url)
    }
  
  
    /**
     * Make a post request
     *
     * @function post
     * @param {String} url API 'POST' URL string.
     * @param {Object} payload Payload information.
     * @return {Response} Response from the post request.
    */
    async post(url, payload) {
      return await request.post(url).send(payload);
    }
}

module.exports = API;