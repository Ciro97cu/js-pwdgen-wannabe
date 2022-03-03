const name = prompt("Insert your name");
const surname = prompt("Insert your surname");
const color = prompt("Insert your fav color");
//print password in the console
console.log(`${name}${surname}${color}21`);
//write password in the html
document.getElementById("password").innerText = `${name}${surname}${color}21`;
