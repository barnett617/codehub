/**
 * 场景：当一个新用户进入聊天室时，通知所有用户
 */
const EventEmitter = require('events').EventEmitter;
const chatRoomEvents = new EventEmitter;

function alertAllUsers(content) {
  console.log(content);
}

function userJoined(username){
  alertAllUsers('用户 ' + username + ' 进入聊天室.');
}

chatRoomEvents.on('userJoined', userJoined);

function login(username){
  chatRoomEvents.emit('userJoined', username);
}

// 直接调用
// login('Tom');

// 暴露给外部

module.exports.login = login;
