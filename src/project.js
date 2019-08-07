const express = require('express');
const projectsService = require('./projectsService');

const projectRouter = express.Router();


//GET ALL PROJECTS
projectRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    projectsService.getAllProjects(knexInstance)
      .then(projects => {
        res.json(projects);
      })
      .catch(next);
  }); 
    
//res.send('testing');


module.exports = projectRouter;