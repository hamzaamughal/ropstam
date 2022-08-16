const express = require('express');
const router = express.Router();

const { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } = require('../controllers/categoryController');

router.route('/').post(createCategory).get(getAllCategories);
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;