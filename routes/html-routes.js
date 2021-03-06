// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // Default index renders client list page for trainer accounts (this would be permission based through passport)
  app.get("/", function (req, res) {

    console.log(req.user)
    if (req.user) {
      if (req.user.isTrainer) {
        db.Client.findAll({ raw: true }).then(function (clients) {
          console.log(clients)
          res.render("trainer", { clientList: clients });
        });
      } else {
        res.redirect(`/profile/${req.user.id}`)
      }
    } else {
      res.redirect(`/login`)
    }
  });

  // This is a backdoor to seed db
  app.get("/admin", function (req, res) {
    res.render("admin")
  });

  // renders signup page
  app.get("/sign-up", function (req, res) {
    if (req.user) {
      res.redirect(`/`);
    }
    res.render("signup");
  })

  // renders login page
  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect(`/`);
    }
    res.render("login");
  })

  app.get("/user/:id", function (req, res) {
    if (req.user) {
      db.User.findOne({
        where: { id: req.params.id }
      }).then((user) => {
        console.log(user.dataValues)
        res.render("add-client", user.dataValues);
      })
    }
    else {
      res.redirect('/')
    }
  });

  // This was a nice experiment on joining a table in sequlize
  // app.get("/profile/:id", function (req, res) {
  //   db.User.findAll({
  //     include: [{
  //       model: db.Client,
  //       where: { UserId: req.params.id }
  //     }]
  //   }).then((userData) => {
  //     // console.log(userData[0].Clients[0].first_name)
  //     let client = userData[0].Clients[0];
  //     let userObj = {
  //       id: userObj.UserId,
  //     }
  //     // res.render("client-profile", userData.dataValues);
  //   })
  // });

  app.get("/profile/:id", function (req, res) {
    db.Client.findOne({
      where: { UserId: req.params.id }
    }).then((client) => {
      console.log(client.dataValues)
      res.render("client-profile", client.dataValues);
    }).catch(() => {
      res.render("add-client", { id: req.user.id })
      // res.status(500).send({ error: `No Client page for user: ${req.user.id}` })
    })
  });

  app.get("/edit-client/:id", function (req, res) {
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