//main.js

//Function using While Loop
function Count_Ten() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("While_Loop").innerHTML = Digit;
}

//Function using For Loop
var Tools = ["Hammer", "Screwdriver", "Saw", "Wrench", "Drill", "Spanner", "Pliers"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Tools.length; Y++) {
        Content += Tools[Y] + "<br>";
    }
    document.getElementById("List_of_Tools").innerHTML = Content;
}

//Function using Array
function array_function() {
    var My_Hobbies = [];
    My_Hobbies[0] = "Drawing";
    My_Hobbies[1] = "Playing Football";
    My_Hobbies[2] = "Watching TV";
    My_Hobbies[3] = "Gardening";
    My_Hobbies[4] + "Crafting";
    document.getElementById("Array").innerHTML = "In my spare time I enjoy " + My_Hobbies[2] + ".";
}


//Function using Constant
function constant_function() {
    const car = {make:"Ford", model:"Focus", colour:"Blue"};
    car.colour = "Grey";
    car.price = "£800";
    document.getElementById("Constant").innerHTML = "The cost of the " + car.make + " was " + car.price;
}

//Function using Let
var X= 68;
document.write(X);
{
    let X= 25;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//Function using Let Keyword
function cars(){
let car = {
    make: "Ford ",
    model: "Focus ",
    year: "2000 ",
    colour: "green ",
};
document.getElementById("car_object").innerHTML = "This car is a " + car.colour  + car.year  + car.make  + car.model ;}