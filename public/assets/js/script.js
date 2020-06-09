
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
    let Tito = [
        {
            email: "tjon767z@yahoo.com",
            password: "thispassword",
            isTrainer: false
        }, {
            firstName: "Tito",
            lastName: "Lopez",
            age: 21,
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
    ]
    let Bob = [
        {
            email: "bobslim43@yahoo.com",
            password: "thispassword",
            isTrainer: false
        }, {
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
    ]
    let Cindy = [
        {
            email: "cindylovespups@yahoo.com",
            password: "thispassword",
            isTrainer: false
        }, {
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
    ]

    // Need a function that runs immediately to seed the database
    function seedDb(data) {
        $.post('')
    }

    // create a function to take the values of the user form and post to the db 
    let signUpForm = $("#sign-up-form")
    let firstName = $('#first_name');
    let lastName = $('#last_name');
    let email = $('#last_name');
    let password = $('#password');
    let passCheck = $('#passwordconfirm')

    $(signUpForm).on("submit", (event) => {
        event.preventDefault();

        // (password !== passCheck) ? return; : ;

        // prevent submission without a completed form
        if (!firstName.val().trim() || !lastName.val().trim() || !email.val()) {
            return;
        }
    })
})