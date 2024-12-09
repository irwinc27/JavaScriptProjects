//main.js


var x = 10;  //Global variable

function Add_numbers_1() {  
    document.write(20 + x + "<br>");  //Use of local variable
}
function Add_numbers_2() {
    document.write(x + 100);  //Use of global variable
    console.log(x);   //Use console.log to debug
}

Add_numbers_1();
Add_numbers_2();


function get_date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today? " //Use of "if" statement
    }
}

function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time <= 12 == Time >0) {
        Reply="It's morning";
    }
    else if (Time >=12 == Time <18) { 
        Reply="It's the afternoon";
    }
    else {
        Reply="It's the evening"
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //use of "else if" statement
}