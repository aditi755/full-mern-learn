const Book = require("../model/Book");
const booksController = require('../controllers/books-controller')
const express = require('express');
const router = express.Router(); // Instantiate the router

router.get('/', booksController.getAllBooks)
router.post('/', booksController.addBook)

module.exports = router