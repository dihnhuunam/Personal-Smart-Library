const db = require('../models');

// model
const Book = db.books;

// functions

// 1. Add Book
const addBook = async (req, res) => {
    const id = req.params.id;
    let data = {
        BookID: id,
        Category: req.body.Category,
        ImageURL: req.body.ImageURL,
        Title: req.body.Title,
        Author: req.body.Author,
        'Publication Date': req.body['Publication Date'],
        'Page count': req.body['Page count'],
    };
    try {
        const book = await Book.create(data);
        res.status(200).send(book);
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).send('Error adding book');
    }
};

// 2. Get All Books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll({});
        res.status(200).send(books);
    } catch (error) {
        console.error('Error fetching all books:', error);
        res.status(500).send('Error fetching all books');
    }
};

// 3. Get Single Book
const getOneBook = async (req, res) => {
    let id = req.params.id;
    try {
        let book = await Book.findOne({ where: { BookID: id } });
        res.status(200).send(book);
    } catch (error) {
        console.error('Error fetching single book:', error);
        res.status(500).send('Error fetching single book');
    }
};

// 4. Update Book
const updateBook = async (req, res) => {
    let id = req.params.id;
    try {
        const book = await Book.update(req.body, { where: { BookID: id } });
        res.status(200).send(book);
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).send('Error updating book');
    }
};

// 5. Delete Book by ID
const deleteBook = async (req, res) => {
    let id = req.params.id;
    try {
        await Book.destroy({ where: { BookID: id } });
        res.status(200).send('Book is deleted!');
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send('Error deleting book');
    }
};

module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook,
};
