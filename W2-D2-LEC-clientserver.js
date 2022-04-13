const net = require('net');

const config = {
  host: '4.tcp.ngrok.io',
  port: 11919
}

const client = net.createConnection(config);

client.on('data', (messageFromServer) => {
  console.log('server says:', messageFromServer);
});

client.setEncoding('utf-8');

client.write('https://moderndogmagazine.com/articles/know-your-dog-memes/48075')

process.stdin.on('data', (data) => {
  client.write(data)
})



