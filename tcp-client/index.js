const net = require('net');
const client = new net.Socket();
const port = 7070;
const host = '127.0.0.1';

client.connect(port, host, function() {
    console.log('Connected');
    
    setInterval(function() {
        client.write("Hello From Client " + client.address().address);
    }, 100);
    

    client.on('data', function(data) {
        console.log('Server Says : ' + data);
        console.log(new Date());
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
});