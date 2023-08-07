const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.end(products)
})
app.listen(6700, ()=> {
    console.log('server listening at port 6700');
})
