var express = require('express');
var mysql = require('mysql');

connect_info = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'node'
};

var connection = mysql.createConnection(connect_info);

var app = express();
connection.connect();

app.get("/", function(req, res){

    res.send("Hello , welcome to index!<br>"+
        "<a href='http://localhost:8081/add'>增</a><br>"+
        "<a href='http://localhost:8081/update/1'>改 +id,  默认1</a><br>"+
        "<a href='http://localhost:8081/del/1'>删 + id,  默认1</a><br>"+
        "<a href='http://localhost:8081/1'>id查询 +id， 默认1</a><br>"+
        "<a href='http://localhost:8081/list'>list查询</a><br>"
        );
});

// 新增
app.get('/add', function(req, res) {
  console.log(req);
  var addSql = "INSERT INTO list(info) VALUES(?)";
  var addSqlParams = ["html"];
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
      return res.end('[ADD ERROR] - '+err.message);
    }        
    if (result.affectedRows == 1) {
      res.send("添加成功！");
    }
  });

});

// 删除
app.get('/del/:id', function (req, res) {

  var delSql = 'DELETE FROM list where id='+req.params.id;
  connection.query(delSql,function (err, result) {
    if(err){
      console.log('[DELETE ERROR] - ',err.message);
      return;
    }        
    if (result.affectedRows == 1) {
      res.send("删除成功");
    }
  });

})


// 修改
app.get('/update/:id', function (req, res) {

  var modSql = 'UPDATE list SET info = ? WHERE id = ?';
  var modSqlParams = ['html5', req.params.id];
  connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
      return res.end('[UPDATE ERROR] - '+err.message);
    }
    if (result.affectedRows == 1) {
      res.send("修改成功");
    }        

  });

})

// 列表查询
app.get('/list', function (req, res) {

  var  sql = 'SELECT * FROM list';
  connection.query(sql,function (err, result) {
    if(err){
      return res.end('[SELECT ERROR] - '+err.message);
    }
    res.send( result );
  });
})


// id查询
// 模拟数据的id和user+id对应
app.get('/:id', function (req, res) {

  var sql = "SELECT * FROM list where id="+req.params.id;
  connection.query(sql,function (err, result) {
    if(err){
      return res.end('[SELECT ERROR] - '+err.message);
    }
    res.send( result );
  });

})






var server = app.listen(8081, function () {
    
  console.log("访问地址: http://localhost:8081")

})