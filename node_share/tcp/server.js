// 引入net模块（基于TCP协议的socket网路编程模块，http模块就是建立在该模块的基础上实现）
const net = require('net')
// 调用net的createServer方法，创建server对象
const server = net.createServer();
// server继承了EventEmitter，具有事件相关方法，调用on方法，监听connection
server.on('connection', (socket) => {
  // socket对象叫连接套接字，包含server_host、server_ip、protocol、client_host、client_ip
  console.log(socket);
  socket.pipe(process.stdout);
  socket.write('data from server');
});
// 定义server监听4000端口
server.listen(4000, () => {
  console.log(`server is on ${JSON.stringify(server.address())}`);
});
