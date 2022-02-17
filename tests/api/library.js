const API = require('./_api.js');

  
  class Library extends API{
  
    constructor(url) {
      super(url);
    }
    /**
     * Make a post request
     *
     * @function addBook
     * @param {Object} payload Payload information.
     * @return {Response} Response from the post request.
    */
     async addBook(payload) {
      return await this.post(`/Library/Addbook.php`, payload);
    }

    /**
     * Add a new book
     *
     * @function getBookInfo
     * @param {String} author Name of auther
     * @return {Response} Response from the post request.
    */
      async getBookInfo(author) {
        return await this.get(`/Library/GetBook.php?AuthorName=${author}`);
    }
}

module.exports = Library;