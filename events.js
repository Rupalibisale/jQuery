$(document).ready(function(){
    $("#sname, #sclass").focus(function(){
        $(this).css("background-color", "pink");
    });
    
    // $("#sname, #sclass").blur(function(){
    //     $(this).css("background-color", "lime");
    // });

    // $("#scountry").change(function(){
    //     //$(this).css("background-color", "orange");
    //     var a = $(this).val();
    //     $("#test").html(a);
    // });
    
    $("#sname, #sclass").select(function(){
        $(this).css("background-color", "blue");
    });

    $("#sform").submit(function(){
        //console.log("Form submitted");
        alert("Form submitted");
    });

});