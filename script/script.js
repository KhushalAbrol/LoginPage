$("#loginBtn").click(function() {
    $("#loginModal").modal("show")
    });
    //to show reserve Modal when btn is clicked
    $("#signUpBtn").click(function(){
        $("#signUpModal").modal("show")
    });
    //to dismiss the login Modal when close button is clicked
    $("#loginClose").click(function(){
        $("#loginModal").modal("hide")
    });
    //to dismiss the reserve Modal when close button is clicked
    $("#signUpClose").click(function(){
        $("#signUpModal").modal("hide")
    });