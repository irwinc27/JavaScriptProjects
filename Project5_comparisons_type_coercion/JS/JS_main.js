//--js main


function my_number() {
    var numb = document.write("80"+5);
    document.getElementById("number").innerHTML = numb; //string and number expression
};

function infinity() {
    var inf = document.write(2E340);    //display positive infinity
    document.getElementById("inf").innerHTML = inf;
};

function neg_infinity() {
    var neg = document.write(-2E340);   //display negative infinaty
    document.getElementById("neg").innerHTML = neg;
};

function boolean() {
    var boolean = document.write(30>5);  //display boolean function
    document.getElementById("boo").innerHTML = boolean;
};

function double_true() {
    var correct = document.write(3==3);  //display a double equals true
    document.getElementById("tru").innerHTML = correct;
};

function double_false() {
    var incorrect = document.write(6==4);  //display and double equals false
    document.getElementById("fal").innerHTML = incorrect;
};

function triple_1() {
    var x = 5;
        y = 5;
        var trip1 =(x===y);    //diplay triple equals true
        document.getElementById("tri1").innerHTML = trip1;
};

function triple_2() {
    var x = 5;
        y = "7";
        var trip2 =(x===y);    //diplay triple equals false
        document.getElementById("tri2").innerHTML = trip2;
}

function triple_3() {
    var x = 5;
        y = "5";
        var trip3 =(x===y);    //diplay triple equals false
        document.getElementById("tri3").innerHTML = trip3;
};

function triple_4() {
    var x = "5";
        y = "7";
        var trip4 =(x===y);   //diplay triple equals false
        document.getElementById("tri4").innerHTML = trip4;
}

function and_1() {
    var and_true = document.write(6>2 && 10>5);
    document.getElementById("and1").innerHTML = and_true;  //display and with true result 
};

function and_2() {
    var and_false = document.write(6>2 && 10<5);
    document.getElementById("and2").innerHTML = and_false;  //display and with false result
};

function not_function1() {
    document.getElementById("not1").innerHTML = !(30>15);   //display not with true result
}

function not_function2() {
    document.getElementById("not2").innerHTML = !(20>30);   //display not with false result
}