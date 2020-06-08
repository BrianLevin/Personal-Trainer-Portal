
$(function () {

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

})