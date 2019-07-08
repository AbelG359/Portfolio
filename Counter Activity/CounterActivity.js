// here is a variable where we can store the value of the counter
let value = 0;

// set the header to the initial value
document.querySelector("#value").innerHTML = value.toString();

document.querySelector('#subtract').onclick = function() {
value--;
}
document.querySelector('#add').onclick = function() {
    value++;
}
 //function(); // 3. "DRY" your code out by making a function
 /*function change(sign) {
 if(sign == "add") {
 value++ 
    document.querySelector("#value").innerHTML = value.toString();
 } 
}
else {
    value--;
    document.querySelector("#value").innerHTML = value.toString();
}

*/