const personName = prompt("Insert your name");
const surname = prompt("Insert your surname");
const color = prompt("Insert your fav color");
//print password in the console
console.log(`${personName}${surname}${color}21`);
//write password in the html
document.getElementById("password").innerText = `${personName}${surname}${color}21`;