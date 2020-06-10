// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var express = require("express");

module.exports = function (app) {
  // // Using the passport.authenticate middleware with our local strategy.
  // // If the user has valid login credentials, send them to the members page.
  // // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user.dataValues)
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error


  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


  // ------ USER API ROUTES

  // GET route to readall users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // need POST new user route (takes in a jquery JSON object and uses users model )
  app.post("/api/signup", function (req, res) {
    // console.log for testing
    console.log(req.body);
    // create the user
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      // AJAX call can define isTrainer as true or false in the future, defaults to false
      isTrainer: req.body.isTrainer,
      // We need to determine the trainerId by doing a GET request for a list of all trainers when we utilize this functionality for multiple trainers. for now it should default to Brian
      // trainer_Id: req.body.trainerId,
    })
      .then(function (dbUser) {
        // temporary response
        // res.json(dbUser);
        // ideal response is a redirect
        res.sendStatus(200)
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });


  // Route to delete a user (Caution!)
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });


  // Route to update a User
  app.put("/api/user/:id", function (req, res) {
    console.log(req.body)
    db.User.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbUser) {
        console.log(dbUser)
        res.json(dbUser);
      });
  });

  // ------ CLIENTS API ROUTES

  // GET route to readall clients
  app.get("/api/client", function (req, res) {
    db.Client.findAll({}).then(function (dbClients) {
      res.json(dbClients);
    });
  });

  // route to POST new client (takes in a jquery JSON object and uses Client model)
  app.post("/api/submit-client", function (req, res) {
    // console.log for testing
    console.log(req.body);
    // create the user
    db.Client.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      age: req.body.age,
      gender: req.body.gender,
      user_weight: req.body.user_weight,
      user_height: req.body.user_height,
      phone_number: req.body.phone_number,
      goals: req.body.goals,
      injuries: req.body.injuries,
      medical_conditions: req.body.medical_conditions,
      diet: req.body.diet,
      history: req.body.history,
      plan_type: req.body.plan_type,
      client_photo: req.body.photoUrl,
      // PRODUCTION WILL NEED TO REQUIRE REQ.USER.ID
      UserId: req.body.user_id

    }).then(function (dbClients) {
      // temporary response
      res.json(dbClients);
      // ideal response is a redirect
      // res.redirect(307, "/api/login");
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // PUT client route for updating a client
  app.put("/api/clients/:id", function (req, res) {
    console.log(req.body)
    db.Client.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbClients) {
        console.log(dbClients)
        res.json(dbClients);
      });
  });

  // need DELETE client route for deleting a client
  app.delete("/api/clients/:id", function (req, res) {
    db.Client.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbClients) {
      res.json(dbClients);
    });
  });

  // -------- PLANS API ROUTES
  app.get("/api/plans", function (req, res) {
    db.Plans.findAll({}).then(function (dbPlans) {
      res.json(dbPlans);
    });
  });



  app.post("/api/submit-plan", function (req, res) {
    // console.log for testing
    console.log(req.body);
    // create the user
    db.Plans.create({
      Plan_name: req.body.Plan_name,
      Workouts: req.body.Workouts,
    })
      .then(function (dbPlans) {
        // temporary response
        res.json(dbPlans);
        // ideal response is a redirect
        // res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.put("/api/plans/:id", function (req, res) {
    console.log(req.body)
    db.Plans.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbPlans) {
        console.log(dbPlans)
        res.json(dbPlans);
      });
  });

  app.delete("/api/plans/:id", function (req, res) {
    db.Plans.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPlans) {
      res.json(dbPlans);
    });
  });

  // ------ CLIENT LOG API ROUTES

  app.get("/api/ClientLog", function (req, res) {
    db.ClientLog.findAll({}).then(function (dbClientLog) {
      res.json(dbClientLog);
    });
  });

  app.post("/api/submit-client-log", function (req, res) {
    // console.log for testing
    console.log(req.body);
    // create the user
    db.ClientLog.create({
      client_id: req.body.client_id,
      session_note: req.body.session_note,
    })
      .then(function (dbClient_log) {
        // temporary response
        res.json(dbClient_log);
        // ideal response is a redirect
        // res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.put("/api/client_log/:id", function (req, res) {
    console.log(req.body)
    db.ClientLog.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbClient_log) {
        console.log(dbClient_log)
        res.json(dbClient_log);
      });
  });

  app.delete("/api/Client_log/:id", function (req, res) {
    db.Client_log.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (Client_log) {
      res.json(Client_log);
    });
  });


};

