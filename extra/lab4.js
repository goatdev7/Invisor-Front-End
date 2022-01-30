//Ghulam Mustafa Bajwa
//21-11277
$(document).ready(function(){
//Question 1
  $(".child").mouseenter(function(){
    $(".child").css("background-color", "orange");
  });
  $(".child").click(function(){
    $(".child").hide();
  });
//Question 2
 $(".small").animate({left: "+=568px"});

 $(".small").animate({bottom: "+=168px"});
 


//Question 3
$("#add").click(function(){ 

    var a = "<tr><td> </td><td>     </td><td>    </td> <td>    </td></tr>";
    $("table tbody:last").append(a);
        });
    
$("#search").click(function(){      
    $('tr:contains(BSCS)').css("background-color","yellow"); 
        });

//Question 4
// Changing text of button
$("#myButton").click(function(){
    $("#myButton").html("Show");
});
});
