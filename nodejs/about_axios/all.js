var axios = require('axios');
var fs = require('fs');
var path = require('path')

console.log('ajaxing...')
axios.all([
    axios.get('https://api.github.com/users'),
    axios.get('https://api.github.com/repositories')
]).then(axios.spread((res1, res2) => {
    const date = new Date().valueOf();
    fs.writeFileSync(path.join(__dirname, `users${date}.js`), JSON.stringify(res1.data));
    fs.writeFileSync(path.join(__dirname, `repos${date}.js`), JSON.stringify(res2.data));
    console.log('get result...')
    try {
        const users = res1.data.reduce((acc, cur) => acc.concat(cur.login), []);
        const repos = res2.data.reduce((acc, cur) => acc.concat(cur.name), []);
        console.log('users', users);
        console.log('repos', repos);
    } catch (e) {
        console.log('data resolve error', e)
    }
})).catch(err => {
    console.log('err=====', err);
})