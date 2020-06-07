// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // Default index renders client list page for trainer accounts (this would be permission based through passport)
  app.get("/", function (req, res) {
    res.render("index");
  });

  // renders signup page
  app.get("/sign-up", function (req, res) {
    res.render("signup");
  })

  // renders login page
  app.get("/login", function (req, res) {
    res.render("login");
  })

  app.get("/user/:id", function (req, res) {
    db.User.findOne({
      where: { id: req.params.id }
    }).then((user) => {
      console.log(user.dataValues)
      res.render("add-client", user.dataValues);
    })
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