const express = require('express')
const app = express()
const router = express.Router()

// controller functions
const { getAllTasks } = require('../controllers/tasks')


router.get('/', getAllTasks)


module.exports = router

