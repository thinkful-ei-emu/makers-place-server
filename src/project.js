const express = require('express');
const projectsService = require('./projectsService');
const xss = require('xss');
const { requireAuth } = require('./middleware/jwt-auth');

const projectRouter = express.Router();
const bodyParser = express.json();


const serializeProject = project => ({
  id: project.id,
  title: xss(project.title),
  description: xss(project.description),
  img_url: xss(project.img_url)
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

    const { title, description, img_url } = req.body;
    const newProject = { title, description, img_url };

    projectsService.insertProject(
      req.app.get('db'),
      newProject
    )
      .then(project => {
        res
          .status(201)
          .location('/api/projects')
          .json(serializeProject(project));
      })
      .catch(next);
  });

  /* async/await syntax for promises */
async function checkProjectExists(req, res, next) {
  try {
    const project = await projectsService.getById(
      req.app.get('db'),
      req.params.project_id
    )
    if (!project)
      return res.status(404).json({
        error: `Project doesn't exist`
      })
    res.project = project
    next()
  } catch (error) {
    next(error)
  }
}


module.exports = projectRouter;