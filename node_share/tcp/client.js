// 引入net模块（基于TCP协议的socket网路编程模块，http模块就是建立在该模块的基础上实现）
const net = require('net');
// 连接4000端口
const client = net.connect({port: 4000});
client.on('connect', () => {
  client.write('data from client');
});
client.on('data', (chunk) => {
  console.log(chunk.toString());
  // client.end();
});