// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // renders login page
  app.get("/", function (req, res) {
    res.render("index");
  })

  // Renders client list page
  app.get("/clients", function (req, res) {
    res.render("clients");
  });

  app.get("/client/:id", function (req, res) {
    var id = req.params.id;
    // this code could be incorrect..  //find(({id}))
    db.Client.findOne({
      where: { id: id }
    }).then((client) => {
      console.log(client.dataValues)
      // let clientInfo = client.dataValues
      res.render("edit-client", client.dataValues); // get one client by id instead of all
    })
    // we will need to pass a second parameter eventually
  });

  app.get("/add-client", function (req, res) {
    res.render("add-client");
  })
};