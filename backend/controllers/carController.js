const asyncHandler = require('express-async-handler');
const Car = require('../models/carModel');


const createCar = asyncHandler(async (req, res) => {
  const { color, model, registrationNumber } = req.body;

  const car = await Car.create({
    color,
    model,
    registrationNumber
  })

  res.status(201).json({
    success: true,
    data: car
  })
});

const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();

  res.status(200).json({
    success: true,
    data: cars
  })
});

const getCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(404)
    throw new Error('Car not found')
  }

  res.status(200).json({
    success: true,
    data: car
  })
});

const updateCar = asyncHandler(async (req, res) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!car) {
    res.status(404)
    throw new Error('Car not found')
  }

  res.status(200).json({
    success: true,
    data: car
  })
});

const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) {
    res.status(404)
    throw new Error('Car not found')
  }

  res.status(200).json({
    success: true,
    data: car
  })
});

module.exports = {
  createCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar
};