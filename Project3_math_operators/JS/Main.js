//main.js

function addition() {                    //define addition function
    var add =3+4;
    document.getElementById("add").innerHTML = `3+4=${add}`;  //print result in HTML
}

function subtraction() {                //define subtration function
    var subtraction =5-2;
    document.getElementById("sub").innerHTML = "5-2=" + subtraction;  //print result in HTML
}

function multiply() {                  //define multiplication function
    var multiply =3*5;
    document.getElementById("mlt").innerHTML = "3*5=" + multiply;  //print result in HTML
}

function divide() {                   //define divide function
    var divide =8/4;
    document.getElementById("div").innerHTML = "8/4=" + divide;  //print result in HTML
}

function multiple() {                 //define multiple function
    var multiple = (3+3) * 4 /2 - 5;
    document.getElementById("mul").innerHTML = "3 plus 3, times by 4, divide by 2, minus 5=" + multiple;  //print result in HTML
}

function modulus() {                  //defie modulus operator
    var modulus = 28 % 3;
    document.getElementById("mod").innerHTML = "divide 28 by 3, the remainder is " + modulus;  //print result in HTML
}

function negation() {                 //define negation operator
    var x=12; 
    document.getElementById("neg").innerHTML = "negator is" + -x;  //print result in HTML
}

function increment() {               //define increment operator
    var x=6; 
    x++;
    document.getElementById("inc").innerHTML = "increment of 6 is " + x++;  //print result in HTML
}

function decrement() {               //define decrement operator
    var x=9;
    x--;
    document.getElementById("dec").innerHTML = "decrement of 9 is " + x--;  //print result in HTML
}

function math_random() {             //define random math function
    var random = (Math.random() *50);
    document.getElementById("ran").innerHTML = "random number between 0 and 50 is " + random;  //print result in HTML
}

function math_object() {             //define math object function
    var object = (Math.PI)
    document.getElementById("obj").innerHTML = "math object of PI is " + object;  //print result in HTML
}