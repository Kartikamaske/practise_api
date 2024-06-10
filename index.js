const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Pune!')
})

app.get('/getcitydata', (req, res) => {
  res.send([{"1":'Kolhapur'},{"2":'Sangli'},{"3":'Satara'},{"4":'Sangli'}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})