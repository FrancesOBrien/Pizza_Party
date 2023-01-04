# Welcome to the Pizza Party
Sike, we are just going to talk about MongoDB, Mongoose, Express, and a lil bit of React. This store project is an example of a web resource that uses a MongoDB database and 7 REST-compliant routes to display a pizza menu.
##The 7 RESTful Routes
Representational State Transfer, or REST, is a software architecture principle that ensures interoperability between different Internet computer systems. The order of the routes in the server.js file ensures that the information will be displayed correctly across all the pages. After the Root Route, or the landing page, the REST Routes are as follows:
### INDEX
This page displays all menu items, with description and option to remove
### NEW
The *CREATE YOUR OWN PIE* button links to this page, a form for entering your own ingredients. Submit button adds this pie to the menu on the Index page.
### DELETE
The *REMOVE* button deletes this menu item from the Index page.
### UPDATE
Sends **EDIT** page form to database to change the menu item record
###  CREATE
Sends **NEW** page form to database to add a new record
### EDIT
The *Additional Toppings* button routes to this form for changing the ingredients on a selected pie, plus you can add pineapple. *SUBMIT* button returns to the menu item description page.
###  SHOW
Displays a selected menu item, with option to *ORDER* or *Additional Toppings* to edit the ingredients.

## Technology used in this project:
JavaScript, Node, Express, MongoDB, Mongoose, and React

Vimeo walk-through can be found at https://vimeo.com/783350500/61d23ed82c
