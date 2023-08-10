const express = require('express')
const app = express()

// tasks
const tasks = require('./routes/tasks')
// controller 

// port 
const port = 3456

// middleware
app.use(express.json())


// app.get('/login', (req, res) => {
// console.log('heyo');
// res.send('supp')
// })

app.use('/api/v1/tasks', tasks) 

app.listen(port, console.log(`server listening on ${port}`))