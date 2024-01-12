const bookController = require('../controllers/bookController.js');

// router
const router = require('express').Router();
router.post('/addBook', bookController.addBook);
router.get('/getAllBooks', bookController.getAllBooks);
router.get('/getOneBook/:id', bookController.getOneBook);
router.put('/updateBook/:id', bookController.updateBook);
router.delete('/deleteBook/:id', bookController.deleteBook);

module.exports = router;

