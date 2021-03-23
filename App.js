const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

const fruits = [
    {name: 'apel'},
    {name: 'jeruk'},
    {name: 'cerry'},
    {name: 'mangga'}
]

app.get('/', (req, res) => {
  res.render('index', {
      first: 'Nine',
      last: 'One',
      fruits: fruits
  })
})

app.get('/:name', (req, res) => {
    res.send(`My Name is ${req.params.name}`)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})