const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/book-routes");
const app = express();
const cors = require("cors")

//middlewares
app.use(express.json());
app.use(cors());
app.use('/books', router) //localhost:5000/books


mongoose.connect("mongodb+srv://admin:1q2Xg4JzOLjvntqt@cluster0.f3ntupp.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("connected to database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err))


//MONGO CLIENT CLOUD - WEBSITE
//1q2Xg4JzOLjvntqt
//mongodb+srv://admin:<password>@cluster0.f3ntupp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0