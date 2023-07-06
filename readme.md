# PROJECT 2

- **Project Name:** Bizarre
- **Project By:** Nicholas Smith
- [**LINK TO GITHUB:**](https://github.com/nicholasjamessmith/bizarre)
- [**LINK TO DEPLOYED WEBSITE**](https://bizarre.onrender.com/)
- **List of technologies used: ** HTML, CSS, JS, NODE, EXPRESS, EJS, Mongo
- [**LINK TO TRELLO**](https://trello.com/b/mhPIIh41/project2)

## Description
Bizarre is a model version of a multimedia blog site. The scope of the site will depend on how many features can be realistically deployed within the time allotted for the project. At the very least, the site will be a functional journaling platform with the ability to create, read, update, and delete journal entries. Ideally, the site will feature audio, images, text, and video.

Users should be able to view a list of exisiting data on the site (either just text or multimedia), and interect with this data by adding to it, viewing individual elements, deleting elements, 

Data will be stored, retrieved from, added to, and deleted from the Mongo Database site connected via Mongoose ODM library.

Ideally, the data model for each type of post would be a "piece", and each piece would include some text, image, audio, or video, or a combination of those elements.

The site will be built designed with RESTful routes architecture using JavaScrip and HTML, using Node and Express frameworks, EJS templating, and styled using CSS.



##Mockup of UI
-![Desktop view](http://imgur.com)
-![Mobile View](http://imgur.com)

##List of Backend Endpoints

| Endpoint    |    Method        |      Purpose      |
|-------------|------------------|-------------------|
| /pieces     |      GET         |lists all pieces   |   
| /pieces:/drawing1| GET         |lists drawing1     |

##ERD (Entity Relationship Diagram)
![PICTURE OF ERD](http://imgur.com)
- [Free ERD Diagram Tool](https://dbdiagram.io/home)