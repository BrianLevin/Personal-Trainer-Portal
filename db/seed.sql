USE pt_portal_dev_DB;

INSERT INTO Clients (Age) VALUES ('2');


insert into Clients (age, gender, User_Weight, User_Height, phone_number, Goals, Injuries, Medical_Conditions, Diet, History, Plan_type, user_id) values (1, 'Wilma', 1, 1, '3', 'donec odio justo ', 'enim blandit mi in porttitor', 'amet eleifend pede libero quis', 'vestibulum ante ipsum primis', 'pede nullam', 1, 1);
insert into Clients (age, gender, User_Weight, User_Height, phone_number, Goals, Injuries, Medical_Conditions, Diet, History, Plan_type, user_id) values (2, 'Merv', 2, 2, '3', 'congue elementum', 'massa quis', 'blandit lacinia', 'varius', 'ut suscipit', 2, 2);
insert into Clients (age, gender, User_Weight, User_Height, phone_number, Goals, Injuries, Medical_Conditions, Diet, History, Plan_type, user_id) values (3, 'Evonne', 3, 3, '2', 'habitasse platea ', 'at ipsum ac tellus', 'aenean', 'nam tristique tortor', 'tempor turpis', 3, 3);

insert into Plans (Plan_name, Workouts) values ('purus', 'augue');
insert into Plans (Plan_name, Workouts) values ('id pretium', 'primis in');
insert into Plans (Plan_name, Workouts) values ('libero quis orci', 'penatibus et');

insert into Client_log (client_id, Session_note) values (1, 'guy needs more help');

insert into USER (first_name, last_name, email, user_password, trainer, Trainer_ID) values ('Johan', 'Kiezler', 'jkiezler0@icio.us', 'RYvrmfUK', false, 1);
insert into USER (first_name, last_name, email, user_password, trainer, Trainer_ID) values ('Rourke', 'Gres', 'rgres1@uiuc.edu', 'uOOTYq', true, 2);
insert into USER (first_name, last_name, email, user_password, trainer, Trainer_ID) values ('Mala', 'Wallbanks', 'mwallbanks2@jimdo.com', 'pzs482', false, 3);
insert into USER (first_name, last_name, email, user_password, trainer, Trainer_ID) values ('Pippy', 'Watsham', 'pwatsham3@bbc.co.uk', 'd25MxPIPC', true, 4);
insert into USER (first_name, last_name, email, user_password, trainer, Trainer_ID) values ('Wandis', 'Fiddiman', 'wfiddiman4@phoca.cz', 'J3KLkgnP', false, 5);


select * from Clients;
select * from Plans;
select * from Client_log;
select * from USER;
