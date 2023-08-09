const express = require('express')
const app = express()

const port = 3456

app.get('/login', (req, res) => {
console.log('heyo');
res.send('supp')
})

app.listen(port, console.log(`server listening on ${port}`))
