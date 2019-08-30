# Makers Place


## Link to live app 

https://coreys-makers-place-app.now.sh


## Summary 

This server was built for the Makers Space clint application. Makers Place allows users to create an account and share information, pictures of the projects they have created. All information is stored in one database;


## Tech Stack:

**Back-End**: NodeJS, Express

**Security**: JWT, XSS, Bcrypt

**Database**: PostgreSQL

**Testing**: Jest, Enzyme, Chai, Mocha, Supertest


## Docs 

/api/projects (GET '/' all projects)

/api/projects (POST '/' submit new project)

/api/users (POST '/' register new user)

/api/auth (POST '/login' login with database credentials)


## Screenshots

![Landing Page](https://i.imgur.com/JO92kSz.png)

![Login Page](https://i.imgur.com/ChrEdEt.png)

![Registration Page](https://i.imgur.com/I66J433.png)

![Main Feed Page](https://i.imgur.com/08WkaME.png)

![Add Project Page](https://i.imgur.com/1qytyGG.png)


## Scripts:

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`


## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.