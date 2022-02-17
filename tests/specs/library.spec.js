const { 
    expect, 
    request,
    baseUrl
  } = require('../../config');

const {
  generateRandomAisle,
  generateRandomAuthor,
  generateRandomISBN,
  generateRandomBook
} = require('../../utils/helper');

const Library = require('../api/library.js');
const LibraryApi = new Library(baseUrl);

describe('Library', async () => {
    
  // PASSING CONDITIONS
    // ✔ All response status codes should be 200
    // ✔ The new book should be added
    // ✔ The response message should be "successfully added"
    // X There book "ID" should be the value of the "ISBN" data
    // ✔ The details from the added book should be seen on the response
    // ✔ The following details should match the added book details:
    //     - Name
    //     - ISBN
    //     - Aisle

    describe('POST', async () => {
      describe('POST /Library/Addbook.php - Add new book', async () => {
          it('Should be able to add a new book', async () => {
              const payload = {
                'name': generateRandomBook(),
                'isbn': generateRandomISBN(),
                'aisle': generateRandomAisle(), // unique key
                'author': generateRandomAuthor()
                };

              // Add a new book           
              const response = await LibraryApi.addBook(payload);
              expect(response.status).to.equal(200, `Unable to add a new book`);

              // The fourth condition states that the book ID == the ISBN
              // but upon checking, that's incorrect. It should be ISBN+Aisle values
              console.log(`ISBN: ${payload.isbn}, Aisle: ${payload.aisle}`)
              const bookId = `${payload.isbn}${payload.aisle}`
              expect(response.body).to.have.property('Msg');
              expect(response.body.Msg).to.equal('successfully added');
              expect(response.body).to.have.property('ID');
              expect(response.body.ID).to.equal(bookId);

              console.log(response.body);
          });
      });
    });

    describe('GET', async () => {
      describe('GET /Library/GetBook.php?AuthorName=<author_name> - Get book information by author', async() => {
        it('Should able to get book information given valid and existing auther name', async() => {
          const payload = {
            'name': generateRandomBook(),
            'isbn': generateRandomISBN(),
            'aisle': generateRandomAisle(), // unique key
            'author': generateRandomAuthor()
            };

            // Add a new book
            const book = await LibraryApi.addBook(payload);
            expect(book.status).to.equal(200, `Unable to add a new book`);

            // Get book information given valid author name
            const response = await LibraryApi.getBookInfo(payload.author);
            const bookInfo = response.body[0];

            // Assertions
            expect(response.status).to.equal(200, `Unable get book information for ${[payload.author]}`);
            expect(bookInfo).to.have.property('book_name');
            expect(bookInfo.book_name).to.equal(payload.name);
            expect(bookInfo).to.have.property('isbn');
            expect(bookInfo.isbn).to.equal(payload.isbn);
            expect(bookInfo).to.have.property('aisle');
            expect(bookInfo.aisle).to.equal(payload.aisle);

            console.log(bookInfo);
        })
      });

    });
});