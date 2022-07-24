$(document).ready(function(){
    $("#new_head").css("color","blue");
    $(".btn").on("click",function(){
        $(".btn").css("color","red");
        $(".btn").text("I am clicked");
    })

    $("p").eq(1).css("color","green");
})