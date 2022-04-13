
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
    host: '165.227.47.243',
    port: 50541,
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (messageFromServer) => {
  console.log('server says:', messageFromServer);
  });

  return conn;
};

module.exports = {connect}