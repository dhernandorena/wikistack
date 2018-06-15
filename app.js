const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');

app.use(morgan("dev"));

app.get('/', (req, res) => {

  res.send(layout(''));
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
})
