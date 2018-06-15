const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Page, User } = require('../models');
const { addPage, editPage, main } = require('../views');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

router.get('/', (req, res, next) => {
  res.send('default GET /wiki');
  // res.redirect('/');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.post('/', urlencodedParser, async (req, res, next) => {
  if (!req.body) return res.statusCode(400);

  const authorName = req.body.authorName;
  const authorEmail = req.body.authorEmail;
  const title = req.body.title;
  const content = req.body.content;
  const status = req.body.status;

  const page = new Page({
    title,
    content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }

  res.send('POST /wiki' + [ authorName, authorEmail, title, content, status ]);
})

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`


});

module.exports = router;
