
const projectsService = {
  getAllProjects(db) {
    return db
      .select('*')
      .from('makers_place');
  }

};

module.exports = projectsService;