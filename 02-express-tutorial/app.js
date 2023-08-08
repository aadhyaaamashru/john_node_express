const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));

// app.get('/login', (res, req) => {
//   res.status(200).json({success: true, data: people})
// })

// parse form data and parse json data respectively

app.use([express.urlencoded({ extended: false }), express.json()]);

// handle api/people post/get requests

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req,res) => {
const {name} = req.body
if (!name) {
  return res.status(400).json({success: false, msg: 'kya haii name to de'})
}
  res.status(201).json({success:true, person: name})
})


// handle login post request to post the name but only in the form type of setup

// useful only in the form type of setup not idk how it is useful in the other setup in the other setup

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name === "") {
    return res.send("KYA HAIII");
  }
  return res.send(`Welcome ${name} ji`);
});

// ofcourse
app.listen(3456, () => {
  console.log("listening on port 3456");
});

// const morgan = require('morgan')

// app.use(morgan('tiny'))

// app.get("/", (req, res) => {
//   res.send("Home");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/products", (req, res) => {
//   res.send("Products");
// });

// const logger = require("./logger");
// const authorize = require("./authorize");

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
