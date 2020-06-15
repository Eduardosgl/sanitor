const express = require("express")
const server = express()

server.use(express.static("public"))

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
} )

server.get("/create-post", (req, res) => {
    res.sendFile(__dirname + "/views/create-post.html")
} )

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
} )

server.get("/index3", (req, res) => {
    res.sendFile(__dirname + "/views/index3.html")
} )

server.listen(process.env.PORT || 5000)