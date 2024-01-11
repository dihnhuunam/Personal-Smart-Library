const db = require('../models')

// model
const Book = db.books

// functions

//1. Add Book
const addBook = async (req, res) => {

    const id = req.params.id

    let data = {
        BookID: id,
        Category: req.body.Category,
        Title: req.body.Title,
        Author: req.body.Author,
        'Publication Date': req.body['Publication Date'],
        'Page count': req.body['Page count'],
    }

    const book = await Book.create(data)
    res.status(200).send(book)

}

// 2. Get All Books
const getAllBooks = async (req, res) => {
    const books = await Book.findAll({})
    res.status(200).send(books)
}

// 3. get single book
const getOneBook = async (req, res) => {
    let id = req.params.id
    let book = await Book.findOne({ where: { id: id }})
    res.status(200).send(book)
}

// 4. update book
const updateBook = async (req, res) => {
    let id = req.params.id
    const book = await Book.update(req.body, { where: { id: id }})
    res.status(200).send(book)
}

// 5. delete product by id
const deleteBook = async (req, res) => {
    let id = req.params.id    
    await Book.destroy({ where: { id: id }} )
    res.status(200).send('Book is deleted !')
}

module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook
}