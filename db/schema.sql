DROP DATABASE IF EXISTS pt_portal_dev_DB;
CREATE DATABASE  pt_portal_dev_DB;
USE pt_portal_dev_DB;

CREATE TABLE USER
(
    id INT
    AUTO_INCREMENT NOT NULL, 
  first_name VARCHAR
    (30),
  last_name VARCHAR
    (30),
  Email VARCHAR
    (30),
  user_password VARCHAR
    (30),
  Trainer BOOLEAN DEFAULT true,
  Trainer_ID INT,
  PRIMARY KEY
    (id)
  
);

    CREATE TABLE Clients
    (
        id INT
        AUTO_INCREMENT NOT NULL,
	Age INT,
	Gender VARCHAR
        (30),
	User_Weight INT,
	User_Height INT,
	phone_number INT,
	Goals VARCHAR
        (30),
	Injuries VARCHAR
        (30),
	Medical_Conditions VARCHAR
        (30),
	Diet VARCHAR
        (30),
	History VARCHAR
        (30),
	Plan_type INT,
	user_id INT,
    PRIMARY KEY
        (id)
);

        CREATE TABLE Client_log
        (
            client_id INT,
            session_note VARCHAR (300)
        );

        CREATE TABLE Plans
        (
            id INT
            AUTO_INCREMENT NOT NULL,
      Plan_type VARCHAR
            (30),
      Workouts VARCHAR
            (30),
      PRIMARY KEY
            (id)
      )
