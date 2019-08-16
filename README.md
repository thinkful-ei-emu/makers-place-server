##App name 
Makers Place


##Link to live app 
https://coreys-makers-place-app.now.sh


##Docs 
GET /api/feed 
{
  title: "New Project",
  description: "This is a project I am proud of",
  img_url: "www.img.com"
}

POST /api/users
{
  user_name: "BobbyBrown",
  password: "BaconIsGreat"
}


##Screenshots
![Landing Page](https://i.imgur.com/JO92kSz.png)

![Login Page](blob:https://imgur.com/a7ea1a3d-ce6c-4c7d-96f3-e981bf8969c0)

![Registration Page](https://i.imgur.com/I66J433.png)

![Main Feed Page](https://i.imgur.com/08WkaME.png)

![Add Project Page](blob:https://imgur.com/44ae84f9-ff7f-4eda-ac46-49396e2495ff)


##Summary 
To Use this apllication you must register a new user or login with an existing user. You will then be taken to the main feed page which display a list of all projects uploaded to the database. From there, if logged in you can add a project of your own with the 'Add Project' button.


#Tech used 
Javascript, Html5, CSS3, React, Node.js, Express, PostgreSQL, Knex.
  Security: XSS, Bcrypt, Helmet, Cors.
  Testing: Supertest, Mocha, Chai, Nodemon. 