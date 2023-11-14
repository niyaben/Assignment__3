
const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('Good Bye World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
