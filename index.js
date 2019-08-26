const express = require('express');
const fs = require('fs');
const vhost = require('vhost');
const app1 = require('./server1/server1.js').app;
const app2 = require('./server2/server2.js').app;

const app = express()
app.use(vhost('s1.outstandingboy.com', app1))
app.use(vhost('s2.outstandingboy.com', app2))

app.get('/', function(req, res) {
  res.send('select server<br><a href="http://s1.outstandingboy.com">s1</a><br><a href="http://s2.outstandingboy.com">s2</a>')
});

app.listen(80);
