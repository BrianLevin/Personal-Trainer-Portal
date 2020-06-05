
$(function () {

    // Insert front-end code here:

    const login = () => {
        $.ajax({
            method: "POST",
            url: "/api/login"
        }).then(res => {
            console.log(res)
        })
    }



    $("#login").on("click",login)

})