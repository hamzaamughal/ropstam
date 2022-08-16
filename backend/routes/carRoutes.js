const express = require('express');
const router = express.Router();

const { createCar, deleteCar, getAllCars, getCar, updateCar } = require('../controllers/carController');

router.route('/').post(createCar).get(getAllCars);
router.route('/:id').get(getCar).put(updateCar).delete(deleteCar);

module.exports = router;