const https = require('https');

const api = 'https://api.juejin.cn/user_api/v1/author/recommend?limit=5'

https.get(api, res => {
  let content = '';
  res.on('data', chunk => {
    content += chunk;
  })
  res.on('end', () => {
    console.log(JSON.parse(content));
  })
})