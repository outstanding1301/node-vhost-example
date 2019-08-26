const express = require('express');
const app = express()

app.get('/', (req, res)=>{
  res.send('hello server1')
})

app.listen(3000)

exports.app = app
