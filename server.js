//Require modules
require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')
const Product = require('./models/products.js')
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
const methodOverride = require('method-override')


//Set up Middleware
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

mongoose.set('strictQuery', true)

//set up mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

//Mount Routes
//Root route/welcome page
app.get('/', (req, res) => {
    res.render('Root')
})

// Seed route - populate the database for products
app.get('/products/seed', (req, res) => {
  Product.create(
    [
      {
        name: "Gramma Pie",
        description: "Overnight fermented focaccia dough topped with Nonna's marinara, sopressata, and a blend of mozzarella, asiago, and fontina cheese. Full sheet pan, square slices.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRhscvw6cQgRSOsNz4UfCUM_iaJA9Yj5LxTHBlHJUB0kxVl_kpIBXBB1nC0h4MnTy-hQ&usqp=CAU',
        price: "$40",
        stockQuantity: "20",
        inStock: true,
      },
      {
        name: "Emblem Pie",
        description: "Buffalo mozzarella, marinara, olive tapenade, and lots of fresh basil",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMjSPYKOqN9xkQ2KJeBG5voYeurokbsNgoQ&usqp=CAU',
        price: "$25",
        stockQuantity: "20",
        inStock: true,
      },
      {
        name: "Peppa Pie",
        description: "Sopressata, roasted jimmy nardello peppers, thin sliced red onion, four-cheese blend, topped with chile honey and fresh herbs",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUR7u1eTN5o642TClTLMz0X9l04Q9-_7wGw&usqp=CAU',
        price: "$30",
        stockQuantity: "20",
        inStock: true,
      },
      {        
        name: "White Pie",
        description: "Caramelized Vidalia onions, bechemel sauce, Romano/Parmagiano blend",
        image: 'https://media.istockphoto.com/id/114253475/photo/four-cheeses-pizza.jpg?s=612x612&w=0&k=20&c=EXmD8ZiTLKPTPPBz2mcDVu7840lw7AQba3Qy7UWf3Rk=',
        price: "$30",
        stockQuantity: "20",
        inStock: true,
    }
    ],
    (err, data) => {
      res.redirect("/products");
    }
  )
})


//Index (get) show all products
app.get('/products', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('Index', {
            products: allProducts,
        })
    })
})

//New (get)
app.get('/products/new', (req, res) => {
    res.render('New')
})

//Delete (delete)
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/products')
    })
})

//Update (put)
app.put("/products/:id", (req, res) => {
       Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
          res.redirect(`/products`) 
       })
    })


// Create - send the filled form to db and create a new record
app.post("/products", (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
      res.redirect("/products");
    });
  });


//Edit (get) get the form with record to update
app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(!err){
            res.render('Edit',{
                product: foundProduct
            })
        } else {
            res.send({ msg: err.message })
        }
    })
})

//Show (get)
app.get('/products/:id', function (req, res) {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Show', {
            product: foundProduct,
        })
    })
})

//Tell the app to listen
app.listen(3000, function(){
    console.log('listening now');
})
