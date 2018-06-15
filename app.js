const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const models = require('./models');

app.use(morgan("dev"));
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.get('/', (req, res) => {
  res.redirect('/wiki');
  // res.send(layout(''));
})

const PORT = 3000;

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const init = async () => {
  // await models.Page.sync()
  // await models.User.sync()
  await models.db.sync({force: true})
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })
}

init()
