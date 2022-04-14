 
// -this represents the simple way of pulling the connect func (within client.js) into
// the play.js file
const {connect} = require("./client.js");
const {setupInput} = require("./input.js");   //includes handleinput func

console.log("Connecting ...");

const conn = connect();

setupInput(conn);

/* STEPS:
-we import the js net module and within it we have:

-conn func is a storage device for an object that contains the info for the server
we want to connect to

-we pass conn() as a call back func into the connect() function which then runs the 
setEncoding() using conn() built in info

*/