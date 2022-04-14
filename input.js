//purpose of undefined var is to allow us to access the 
//connect function/object (from client.js)
//it is a global variable
let conection; 

const handleUserInput = input => {
  //this conditional allows us to exit connection: \u0003 maps to ctrl+c input
if (input === '\u0003') process.exit();

if(input === "w") conection.write("Move: up");
if(input === "a") conection.write("Move: left");
if(input === "s") conection.write("Move: down");
if(input === "d") conection.write("Move: right");

if(input === '0' ) conection.write("Say: fart");
if(input === '1' ) conection.write("Say: doge");
if(input === '2' ) conection.write("Say: kitty");
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  conection = conn
  return stdin; 
};

module.exports = {setupInput};

