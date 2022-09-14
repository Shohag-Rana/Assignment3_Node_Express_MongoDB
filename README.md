
# Blog Project 

In this Blog Project user can view the post, category wise post, latest post, highlights of the post etc. An Admin can create post, delete post, create category. In this project the technology used are Node JS, Express JS, MongoDB.



## Technology and Tools

 - FrontEnd: HTML, CSS, JS, Bootstrap
 - Backend: Node JS, Express JS
 - Database: MongoDB Atlas [cloud]


## Author

- [Shohag Rana](https://github.com/Shohag-Rana)


## Installation

 - mkdir my-project
 - cd my-project
 - npm init
 - npm i ejs dotenv multer mongoose express
 - npm i -D nodemon
 - npm i body-parser --save
 - run: nodemon app.js


## Github Deployment Command

create a new repository on the command line

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Shohag-Rana/Assignment3_Node_Express_MongoDB.git
git push -u origin main
```
push an existing repository from the command line

```bash
git remote add origin https://github.com/Shohag-Rana/Assignment3_Node_Express_MongoDB.git
git branch -M main
git push -u origin main
```

## Feature of this Project

- User can show home page with all post
- User can view categorywise post
- User can show post details
- Admin can add, create, delete post
- Admin can add delete post category

## Project File Structure and Description
- app.js:- This file starts web server. All  set up logic are in this file.
- Controllers:- This folder contains all the logic of this application.
- Models:- All the database models are define in this models folder.
-  Public:- All the public files such, javascript files, CSS files are define this folder.
- Routes:- All the routing-related logic are define in this folder.
- Views:- this folder contains all the user views i.e. HTML/ejs files.
- upload:- In this folder store all the uploaded images




## Limitation
- This Project web page  is not responsive only desktop user can view perfectly.



## Conculation

In this blog project i use ejs template engine to render the backend data into the frontend. Here is also use rich rext editor in the post form method. Hope that this project is completely done.

