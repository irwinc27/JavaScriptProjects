//--main.js

function my_dictionary() {
    var Car = {
        Make: "Ford",            
        Model: "Puma",
        Line: "ST-Line",
        Color: "Blue",
        Age: "5",
    };
    delete Car.Model; //removes the KVP of Model from Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Car.Model;
}