const express = require('express');
const app = express()

app.get('/', (req, res)=>{
  res.send('hello server2')
})

app.listen(3001)

exports.app = app
