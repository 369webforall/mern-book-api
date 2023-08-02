const Book = require('../models/Book');

const allBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();

    if (!books) {
      return res.status(400).json({ message: 'Book not found' });
    }

    return res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  }
};


module.exports = {allBooks}