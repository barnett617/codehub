const express = require('express');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

const host = '127.0.0.1';
const port = '8090';
const logName = 'log.txt';
const dataName = 'data.txt';

const fs = require('fs');

function log(msg) {
  const logMsg = msg + '\n';
  const logPath = `./${logName}`;
  const existLog = fs.existsSync(logName);
  if (existLog) {
    fs.appendFileSync(logPath, logMsg);
  } else {
    fs.createWriteStream(logPath).write(logMsg);
  }
}

app.get('/', (req, res) => {
  const logMsg = `GET ${req.url} | ${new Date()}`
  console.log(logMsg);
  
  log(logMsg);

  res.sendFile('index.html', {
    root: '.'
  });
});

function storeData(content, callback) {
  const data = content + '\n';
  const existed = fs.existsSync(dataName);
  const dataPath = `./${dataName}`;
  if (existed) {
    fs.appendFileSync(dataPath, data);
  } else {
    fs.createWriteStream(dataPath).write(data);
  }
  callback();
}

app.post('/add', (req, res) => {
  const params = req.body;
  const logMsg = `POST ${req.url} | ${JSON.stringify(params)} | ${new Date()}`
  console.log(logMsg);

  log(logMsg);

  if (params) {
    const { content = '' } = params;
    if (content) {
      storeData(content, function() {
        res.json({
          errno: 0,
          data: null
        })
      })
    } else {
      res.json({
        errno: 400,
        errmsg: '内容为空'
      })
    }
  }
})

function readData(callback) {
  const dataPath = `./${dataName}`;
  const existed = fs.existsSync(dataPath);
  let result;
  if (existed) {
    const content = fs.readFileSync(dataPath);
    result = content.toString();
  }
  callback(result);
}

app.get('/list', (req, res) => {
  const logMsg = `GET ${req.url} | ${new Date()}`
  console.log(logMsg);
  
  log(logMsg);

  readData(data => {
    if (data) {
      const jsonData = data.split('\n').filter(str => str.length);
      res.json({
        errno: 0,
        data: jsonData
      })
    } else {
      res.json({
        errno: 400,
        errmsg: '没有内容'
      })
    }
  })
})

app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}`);
})