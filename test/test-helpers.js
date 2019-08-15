const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user-1',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 2,
      user_name: 'test-user-2',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 3,
      user_name: 'test-user-3',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 4,
      user_name: 'test-user-4',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
    },
  ]
}

function makeProjectsArray(users) {
  return [
    {
      id: 1,
      title: 'First test post!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      img_url: 'www.img.com',
      date_published: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 2,
      title: 'Second test post!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      img_url: 'www.img.com',
      date_published: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 3,
      title: 'Third test post!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      img_url: 'www.img.com',
      date_published: new Date('2029-01-22T16:28:32.615Z'),
    },
    {
      id: 4,
      title: 'Fourth test post!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      img_url: 'www.img.com',
      date_published: new Date('2029-01-22T16:28:32.615Z'),
    },
  ]
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

function makeProjectsFixtures() {
  const testUsers = makeUsersArray()
  const testProjects = makeProjectsArray(testUsers)
  return { testUsers, testProjects }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        makers_projects,
        makers_users
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE makers_projects_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE makers_users_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('makers_projects_id_seq', 0)`),
        trx.raw(`SELECT setval('makers_users_id_seq', 0)`),
      ])
    )
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('makers_users').insert(preppedUsers)
    .then(() =>
      db.raw(
        `SELECT setval('makers_users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
  }

  function seedProjectsTables(db, users, projects) {
    return db.transaction(async trx => {
      await seedUsers(trx, users)
      await trx.into('makers_projects').insert(projects)
      await trx.raw(
        `SELECT setval('makers_projects_id_seq', ?)`,
        [projects[projects.length - 1].id]
      )
    })
}

module.exports = {
  makeProjectsArray,
  makeUsersArray,
  makeAuthHeader,
  makeProjectsFixtures,
  cleanTables,
  seedUsers,
  seedProjectsTables
}