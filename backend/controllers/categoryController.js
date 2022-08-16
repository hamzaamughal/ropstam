const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');


const createCategory = asyncHandler(async (req, res) => {
  const { type } = req.body;

  const category = await Category.create({
    type
  })

  res.status(201).json({
    success: true,
    data: category
  })
})

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    data: categories
  })
})

const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404)
    throw new Error('Category not found')
  }

  res.status(200).json({
    success: true,
    data: category
  })
})

const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!category) {
    res.status(404)
    throw new Error('Category not found')
  }

  res.status(200).json({
    success: true,
    data: category
  })
})

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) {
    res.status(404)
    throw new Error('Category not found')
  }

  res.status(200).json({
    success: true,
    data: category
  })
})


module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory
}