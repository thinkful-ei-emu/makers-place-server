const express = require('express');

const projectRouter = express.Router();

projectRouter
  .route('/')
  .get((req, res) => {
    res.send('Title: My Project, Description: words that describe.');

  });

module.exports = projectRouter;