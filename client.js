
//  -a function called connect() encompasses everything required to connect and interact with the server:
//  this includes:
//
//    1.) a var named conn is the holder for: the createConnection method (from the .net module) and is given an object 
//        that contains the server info as its method argument
//
//    2.) the conn var is put through another net module method that encodes it to utf8
//
//    3.) the on method (from net module) is called on by the conn var, which specifies what to do with incoming data from the server to us
//        in this context it console.logs whatever comes from the server to us

// -js net module is used to create both servers and clients. 
// -This module provides an asynchronous network wrapper and it can be imported using 
// the following syntax. var net = require("net")
//import the .net module and let me use it in my file     

const net = require("net");

const connect = function () {
  const conn = net.createConnection({  
    host: '0.tcp.ngrok.io',
    port: 11496,
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

// receive messages from the server to our console
  conn.on('data', (messageFromServer) => {
  console.log('server says:', messageFromServer);
  });

// receive a message in the console when we successfully connect to the server
  conn.on('data', () => {
  console.log(`You are connected to the server:`);
  });

// add your name as soon as you connect
  conn.on('connect', () => {
  conn.write('Name: NR') 
  });

  /*
  // snake moves up, server recognizes the string
  conn.on('connect', () => {
  conn.write("Move: up") 
  });
  */

  return conn;
};

module.exports = {connect};
