const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// middleware applied to all

app.use([authorize, logger]);

app.get("/", (req, res) => {
  // const method = req.method
  // const url = req.url
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  res.send("Home");
});
app.get("/about", (req, res) => {
  // const method = req.method
  // const url = req.url
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  res.send("About");
});

app.get("/products", (req, res) => {
  // const method = req.method
  // const url = req.url
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  res.send("Products");
});

app.listen(3456, () => {
  console.log("listening on port 3456");
});

// const { products } = require("./data");

// app.get("/", (req, res) => {
//   res.send(`<h1>Home Page</h1>
//   <a href="/api/products"> Products </a>`);
// });

// app.get("/api/products", (req, res) => {
//   const newProd = products.map((product) => {
//     const { name, image, price } = product;
//     return { name, image, price };
//   });
//   res.json(newProd);
// });

// app.get("/api/products/:gid", (req, res) => {
//   const desProd = products.find((product) => {
//     const { name, image, price, id } = product;
//     const { gid } = req.params;
//     if (id === Number(gid)) {
//       return { name, image, price };
//     }
//   });
//   res.json(desProd);
// });

// app.get("/api/v1/query", (req, res) => {
//   const {search, limit} = req.query
//   let sortedProd = [...products]

//   if (search) {
//   sortedProd = sortedProd.filter((product)=> {
//     return(product.name.startsWith(search))
//   })
//   }

//   if (limit) {
//     sortedProd = sortedProd.slice(0, Number(limit))
//   }

//   res.status(200).json(sortedProd)
// });

// app.listen(9800);

// const express = require('express')
// const app = express()
// const {products} = require('./data')

// app.get('/', (req, res) => {
//   res.json(products)
// })

// app.listen(3456, () => {
//   console.log('listening on port 3456');
// })

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.listen(6790, () => {
//   console.log('Server is listening on port 6790....')
// })

// app.get('/', (req, res) => {
//   res.json(products)
// })

// const http = require('http')

// const server = http.createServer((req, res)=> {
//     res.end('Hello ji')
// })

// server.listen(5050, ()=> {
//     console.log(`server listening at port 5050`)
// })
