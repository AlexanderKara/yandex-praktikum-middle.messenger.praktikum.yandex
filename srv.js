import express from 'express'
import path from 'path'


const port = process.env.PORT || 3000;
const app = express();
const __dirname = path.resolve()
const pathStr = path.join(__dirname, "/dist/index.html")

app.use(express.static(`${__dirname}/dist`))
app.get("/*", (req, res) => {
    res.sendFile(pathStr)
})
console.log(port);
app.listen(port);