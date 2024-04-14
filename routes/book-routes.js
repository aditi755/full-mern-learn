const Book = require("../model/Book");
const booksController = require('../controllers/books-controller')
const express = require('express');
const router = express.Router(); // Instantiate the router

router.get('/', booksController.getAllBooks)
router.post('/', booksController.addBook) 
router.get('/:id', booksController.getById)
router.put('/:id', booksController.updateBook ) //http://localhost:5000/books/661ad2d99352a93e1c08d00e
router.delete('/:id', booksController.deleteBook)

module.exports = router