
const projectsService = {
  getAllProjects(db) {
    return db
      .select('*')
      .from('makers_projects');
  },
  insertProject(db, newProject) {
    return db
      .insert(newProject)
      .into('makers_projects')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }

};

module.exports = projectsService;