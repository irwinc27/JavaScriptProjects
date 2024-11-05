

function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height <52 ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Black and White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}

function count_function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_Point = 9;
        function Plus_One() {Starting_Point += 1;}
        Plus_One();
        return Starting_Point;
    }
} 