function calculateArea() {
    // Get user input
    var blouseLength = document.getElementById("Blouselength").value;
    var shoulder = document.getElementById("Shoulder").value;
    var bustRound = document.getElementById("BustRound").value;
    var empireRound = document.getElementById("Empire-Round").value;    
    var sleeveLength = document.getElementById("SleeveLength").value;
    var apexLevel = document.getElementById("ApexLevel").value;
    var frontNeckDepth = document.getElementById("FrontNeckDepth").value;
    var backNeckDepth = document.getElementById("BackNeckDepth").value;
    var sleeveRound = document.getElementById("SleeveRound").value;


    // Validate input
    // if (blouseLength === "" || blouseLength === "") {
    //     alert("Please enter values for both length and width.");
    //     return;
    // }

    // Calculate area
    var two = 1/2*shoulder-4;
    var three = 1/6*bustRound;
    var four = 1/4*bustRound;
    var five = 1/4*empireRound+2.5;
    var seven = 1/12*bustRound+1;
    var eight = backNeckDepth;
    var twelve = 1/12*bustRound+1;
    




    // Display result
    document.getElementById("result1").innerHTML = "(0-1) Full Length is : " + blouseLength+"cm";
    document.getElementById("result2").innerHTML = "(0-2) 1/2*shoulder-4 =  " + two+"cm";
    document.getElementById("result3").innerHTML = "(0-3) 1/6*bustRound =  " + three+"cm";
    document.getElementById("result4").innerHTML = "(3-4) 1/4*bustRound =  " + four+"cm";
    document.getElementById("result5").innerHTML = "(1-5) 1/4*empireRound+2.5 =  " + five+"cm";
    document.getElementById("result6").innerHTML = "Join '4' and '5' with a straing line";
    document.getElementById("result7").innerHTML = "Square down from '2' to '6'";
    document.getElementById("result8").innerHTML = "(0-7) 1/12*bustRound+1 = " + seven+"cm";
    document.getElementById("result9").innerHTML = "(0-8) Back Neck Depth : " + eight +" or as desired and shape neckline curve ";
    document.getElementById("result10").innerHTML = "(2-9) = Shoulder Slope = 0.5cm";
    document.getElementById("result11").innerHTML = "10 is mid-point of 9 and 6";
    document.getElementById("result12").innerHTML = "(6-11) = 2.5cm and Shape of armhole curve";
    document.getElementById("result13").innerHTML = "(1-12) 1/12*bustRound+1 = " + twelve+"cm";
    document.getElementById("result14").innerHTML = "(12-13) 8 to 10cms";
    document.getElementById("result15").innerHTML = "(12-13) 8 to 10cms";
    document.getElementById("result16").innerHTML = "(12-a) = (12-b) = 1.25cm and Join (13-a) and (13-b)";

    document.getElementById("result17").innerHTML = "Cutting Points:";
    document.getElementById("result18").innerHTML = "Back Draft:(8-7-9-10-11-4-5-1)  ON-FOLD:(0-1) Cut:1PC";


    // document.getElementById("result").innerHTML = "The area of the rectangle is: " + area;
    // document.getElementById("result").innerHTML = "The area of the rectangle is: " + area;

}