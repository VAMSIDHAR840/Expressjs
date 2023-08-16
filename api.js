let express = require('express')
let app = express()
let port = 9000;
//middle ware
app.use(express.json())


let course = [
    {
        title: "MongoDb",
        id: 1,
    },
    {
        title: "Express",
        id: 2,
    },
    {
        title: "React JS",
        id: 3,
    },
    {
        title: "Node JS",
        id: 4,
    }
]
let product = [
    {
        name: "Shirt",
        price: 599,
        id: 1
    },
    {
        name: "Paint",
        price: 999,
        id: 2
    },
    {
        name: "T-shirt",
        price: 299,
        id: 3
    }

]
app.get('/', (req, res) => {
    res.send("hii")
})
//getting all courses
app.get('/course', (req, res) => {
    res.send(course)
})
//getting particular record
app.get('/course/:id', (req, res) => {
    let id = req.params.id;
    let data = course.find(d => d.id === parseInt(id))
    if (data) {
        res.send(data)
    }
    else {
        res.send("Id is not")
    }

})

app.post('/course', (req, res) => {
    let data = {
        title: req.body.title,
        id: course.length + 1
    }
    course.push(data)
    res.send(data)
})
app.get('/product', (req, res) => {
    res.send(product)
})
app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let data = product.find(x => x.id === parseInt(id))
    if (data) {
        res.send(data)
    } else {
        res.send("Product not found")
    }
})
//post a product
app.post('/product', (req, res) => {
    let data = {
        name: req.body.name,
        price: req.body.price,
        id: product.length + 1
    }
    product.push(data)
    res.send(data)
})


//update a product
app.put('/product/:id', (req, res) => {
    let id = req.params.id
    let data = product.find(x => x.id === parseInt(id))
    if (data) {
        data.name = req.body.name;
        data.price = req.body.price;
        res.send(data)
    } else {
        res.send("Product not found")
    }
})
//delete a product
app.delete('/product/:id', (req, res) => {
    let id = req.params.id
    let data = product.find(x => x.id === parseInt(id))
    if (data) {
        let productid = product.indexOf(data)
        product.splice(productid, 1)
        // let d = product.filter(e => e.id !== parseInt(id))
        // console.log(d);
        res.send(data)
    } else {
        res.send("Product not found")
    }
})


app.listen(port, () => {
    console.log("server started at " + port);
})