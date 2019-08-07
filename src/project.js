const express = require('express');

const projectRouter = express.Router();

projectRouter
  .route('/')
  .get((req, res) => {
    res.json([{
      id:1,
      title: 'coreys my 3d printed sword',
      description: 'the sword is 3d printed and its cool'
    },
    {
      id:2,
      title: 'my pallet wood desk',
      description: 'its a desk'
    }]);

  });

module.exports = projectRouter;