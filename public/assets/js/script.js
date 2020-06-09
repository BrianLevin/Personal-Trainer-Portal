
$(document).ready(function () {

    // Insert front-end code here:

    const login = () => {
        $.ajax({
            method: "POST",
            url: "/api/login",
            data: {
                email: $("#email-input").val().trim(),
                password: $("#password").val().trim()
            },
            error: (req, status, error) => {
                console.log(error)
            }
        }).then(res => {
            console.log(res)
        });
    }

    $("#login").on("submit", (e) => {
        e.preventDefault();
        login()
    })

    // DB seed data (WORK IN PROGRESS)
    let seedUsers = [
        {
            user: {
                email: "tjon767z@yahoo.com",
                password: "thispassword",
                isTrainer: false
            },
            client: {
                firstName: "Tito",
                lastName: "Lopez",
                age: 28,
                gender: "Male",
                user_weight: 160,
                user_height: 65,
                phone_number: "0",
                goals: "To not be fat and pudgy",
                injuries: "None",
                medical_conditions: "None",
                diet: "Vegan",
                history: "I have worked out before in my life",
                plan_type: "Questionable",
                // user_id: 2 DEFINE THIS BASED ON CallBack
            }
        },
        {
            user: {
                email: "bobslim43@yahoo.com",
                password: "thispassword",
                isTrainer: false
            },
            client: {
                firstName: "Bob",
                lastName: "Slim",
                age: 30,
                gender: "Male",
                user_weight: 200,
                user_height: 70,
                phone_number: "0",
                goals: "Get lean",
                injuries: "None",
                medical_conditions: "None",
                diet: "Vegan",
                history: "never worked out ever",
                plan_type: "Questionable",
                // user_id: 2 DEFINE THIS BASED ON CallBack
            }
        },
        {
            user: {
                email: "cindylovespups@yahoo.com",
                password: "thispassword",
                isTrainer: false
            },
            client: {
                firstName: "Cindy",
                lastName: "Pomeranian",
                age: 25,
                gender: "Female",
                user_weight: 150,
                user_height: 64,
                phone_number: "0",
                goals: "Build mass",
                injuries: "None",
                medical_conditions: "None",
                diet: "Paleo",
                history: "UFC World Champion",
                plan_type: "Beastmode",
                // user_id: 2 DEFINE THIS BASED ON CallBack
            }
        }
    ]

    // Need a function that runs immediately to seed the database
    function seedDb(data) {
        register(data[0].user)
        register(data[1].user)
        register(data[2].user)
    }

    // create a function to take the values of the user form and post to the db 
    // let signUpForm = $("#signup-form")
    let emailInput = $('#email');
    let passwordInput = $('#password');
    let passCheck = $('#passwordconfirm')

    $("#signup-form").on("submit", (event) => {
        event.preventDefault();

        // prevent submission without a completed form
        if (!passwordInput.val() || !emailInput.val()) {
            console.log('enter a password and email')
            return;
        }
        // prevent submission without matching password values
        if (passwordInput.val() !== passCheck.val()) {
            console.log('bad passwords')
            return;
        }
        // define our object:
        let newUser = {
            email: emailInput.val(),
            password: passwordInput.val(),
        }
        // call our post user function, if there is an error on the server side, be sure to respond back to the user that it didnt work and why
        register(newUser)
        emailInput.val("");
        passwordInput.val("");
        passCheck.val("");
    })
    // POST new user registration to DB
    const register = (credentials) => {
        $.post('/api/signup', credentials, () => {


            // NEED TO FIGURE OUT THIS ERROR HANDLING.. IT DOESNT WORK https://api.jquery.com/ajaxError/
            // if (err) {
            //     console.log('The email address already has an account tied to it')
            // }
            window.location.href = "/login";
        })
    }

})