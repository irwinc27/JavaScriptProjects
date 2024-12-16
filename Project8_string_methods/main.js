//--main

function full_sentence() {
    var part_1 = "This is ";
    var part_2 = "a sentence ";
    var part_3 = "I made up ";
    var part_4 = "for this project.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice (27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_method() {
    var X = 125;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_method() {
    var X = 12362.23429768;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}