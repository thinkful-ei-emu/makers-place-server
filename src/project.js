const express = require('express');
const projectsService = require('./projectsService');
const xss = require('xss');

const projectRouter = express.Router();
const bodyParser = express.json();


const serializeProject = project => ({
  id: project.id,
  title: xss(project.title),
  description: xss(project.description),
});

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
  })
  .post(bodyParser, (req, res, next) => {

    const { title, description } = req.body;
    const newProject = { title, description };

    projectsService.insertProject(
      req.app.get('db'),
      newProject
    )
      .then(project => {
        res
          .status(201)
          .location(`/api/projects`)
          .json(serializeProject(project));
      });


  });


module.exports = projectRouter;