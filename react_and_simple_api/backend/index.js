const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Dummy products
const products = [
  { id: 1, name: "Laptop", price: 150000 },
  { id: 2, name: "Iphone", price: 80000 },
  { id: 3, name: "Monitor", price: 20000 },
  { id: 4, name: "Monitor2", price: 20000 },
]

// Root route
app.get("/", (req, res) => {
  res.send("Dummy Products API is running")
})

// Products route
app.get("/products", (req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
