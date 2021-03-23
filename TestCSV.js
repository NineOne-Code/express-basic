const express = require('express')
const app = express()
const http = require('http').createServer(app)
const fileSystem = require('fs')
const fastcsv = require('fast-csv')
const port = 3000

app.use('/public', express.static(__dirname + "/public"))

app.get('/', (req, res) => {
     const data = [
         {
            id: 1,
            name: "Nine",
            age: 16
         },
         {
             id: 2,
             name: "One",
             age: 15
         },
         {
             id: 3,
             name: "Wan",
             age: 17
         }
     ]
     const ws = fileSystem.createWriteStream("public/data.csv")
     fastcsv.write(data, { headers: true }).on("finish", () => {
         res.send(`<a href="/public/data.csv" download="data.csv" id="download-link"></a><script>document.getElementById('download-link').click();</script>`)
     }).pipe(ws)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })