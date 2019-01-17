let fizz = "Fizz";
let buzz = "Buzz";
let limit = 100;
var output = document.getElementById("output");
    


function fizzBuzz(){
    output.innerHTML = "";
    if (document.getElementById("divByThree").value != ""){
        fizz = document.getElementById("divByThree").value;
    }
    if (document.getElementById("divByFive").value != ""){
        buzz = document.getElementById("divByFive").value;
    }
    if (document.getElementById("numberLimit").value != ""){
        limit = document.getElementById("numberLimit").value;
    }
    for (x = 1; x <= +limit; x++) {
        if (x % 5 == 0 && x % 3 == 0){
            output.innerHTML += (fizz + " " + buzz + "</br>");
            console.log(fizz + " " + buzz);
        } else if (x % 3 == 0){
            output.innerHTML += (fizz + "</br>");
            console.log(fizz);
        } else if (x % 5 == 0){
            output.innerHTML += (buzz + "</br>");
            console.log(buzz);
        } else {
            output.innerHTML += (x + "</br>");
            console.log(x);
        }
    }
}