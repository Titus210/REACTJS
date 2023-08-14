const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to New shop shop")
})


app.get('/products', (req, res) => {
    res.send(["Mocha", "Latte"])
})



const port = process.env.PORT || 8000

app.listen(port, console.log(`Server running at port ${port}`))