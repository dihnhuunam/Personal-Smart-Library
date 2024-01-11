const bookController = require('../controllers/bookController.js');

// router
const router = require('express').Router();

// use routers
router.post('/addBook', bookController.addBook); // Assuming addBook is the correct function name

router.get('/allBooks', bookController.getAllBooks);

// Books router
router.get('/:id', bookController.getOneBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

module.exports = router;
