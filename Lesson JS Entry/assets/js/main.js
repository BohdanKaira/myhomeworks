 // Correct Variables
// FIRST_NAME
// secondName
// $Your_NAME
// NAME_1_2

// Incorrect Variables
/*  1234name
first-name
second name
*/

/* styles writing
1.Snake case
2. Camel case
3. Pascal case
4. Kebab case
*/
function Hello() {
    const username = prompt('Enter your Name');

    if(username){
        alert(`Hello, ${username}!`);
    }
}
function Perimeter() {
    const side = prompt('Enter length of one side in cm');
    let result = 0;
    if(side) {
        result = side * 4;
        alert(`Your result is ${result} cm`);
    }
}
function Square() {
    const radius = prompt('Enter circle radius in cm');
    let result = 0;
    if(radius) {
        result = ((Math.PI * Math.pow(radius, 2)).toFixed(2))
        alert(`Circle square is ${result} cm`)
    }
}
function Travel() {
    const distance = prompt('Enter the distance between the two cities in km');
    const time = prompt('Enter how much time you want to cover this distance in hours');
    let speed = 0;
    if(distance, time){
        speed = (distance / time).toFixed(1);
        alert(`You have to drive at ${speed} km/h`)
    }
}
function Convertor() {
    const coefficient = 0.92;
    const USD = prompt('Enter dollar amount');
    let result = 0;
    if(USD) {
        result = (USD * coefficient).toFixed(2);
        alert(`${USD} USD = ${result} EUR`)
    }
}