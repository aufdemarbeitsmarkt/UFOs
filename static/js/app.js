// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select('tbody');

// simple JacaScript console.log statement
function printHello() {
    console.log('Hello there!');
}

// takes two numbers and adds them
function addition(a, b) {
    return a + b;
}

// functions can call other functions 
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

// example of an arrow function for printHello()
printHello = () => 'Hello There'; 

// example of an arrow function for addition()
addition = (a, b) => a + b;

// example of an arrow funciton for doubleAddition
doubleAddition = (c, d) => addition(c, d) * 2; 

let friends = ['Sarah', 'Greg', 'Cindy', 'Jeff']; 

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}