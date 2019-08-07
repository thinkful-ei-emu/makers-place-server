
const projectsService = {
  getAllProjects(db) {
    return db
      .select('*')
      .from('makers_place');
  },
  insertProject(db, newProject) {
    return db
      .insert(newProject)
      .into('makers_place')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }

};

module.exports = projectsService;