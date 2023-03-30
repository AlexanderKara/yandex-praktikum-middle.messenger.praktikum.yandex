const express = require('express');
const path = require("path")

const port = process.env.PORT || 3000;
const app = express();
const pathStr = path.join(__dirname, "../dist/index.html")

app.use(express.static("./dist"))
app.get("/*", (req, res) => {
    res.sendFile(pathStr)
})
console.log(port);
app.listen(port);