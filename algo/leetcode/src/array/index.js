var targetUser = 'tom';
var users = ['jerry', 'bob', 'marry', 'tom', 'danny'];
// conclusion
// find will stop when find target and return the target element
// WARNING: IE may not support find method
function testFind(targetUser, users) {
    const ans = users.find(item => item === targetUser)
    out(ans)
}
// conclusion
// filter will iterate each of array and return an array you want
function testFilter(targetUser, users) {
    const ans = users.filter(item => item === targetUser).shift()
    out(ans) 
}
const out = console.log;
function main() {
    // testFind(targetUser, users)
    testFilter(targetUser, users)
}
main()