const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8087});
wss.on('connection:',(ws)=>{
  console.log('nueva conexion');
  //ws.on ESCUCHAN
  ws.on('Mensaje:',(data)=>{
    console.log(`mensaje:${data}`);
    wss.clients.forEach((cliente)=>{
      if(cliente !== ws && cliente.readyState == WebSocket.OPEN){
        cliente.send(data);
      }
    });
  });
});