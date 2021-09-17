// var isValid = function(s) {
//     if (s.length < 2) return false;
//     let stack = [];
//     for (let char of s) {
//         if (char === '(' || char === '[' || char === '{') {
//             stack.push(char);
//         } else {
//             const top = stack[stack.length - 1];
//             if ((char === ')' && top === '(') || (char === ']' && top === '[') || (char === '}' && top === '{')) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

var isValid = function(s) {
    let stack = [];
    let map = {')': '(', ']': '[', '}': '{'};
    for (let c of s) {
        if (!(c in map)) stack.push(c);
        else if (stack.length === 0 || stack.pop() !== map[c]) return false;
    }
    return stack.length === 0;
}

function main() {
    const test = [
        '()',
        '()[]{}',
        '(]',
        '([)]',
        '{[]}'
    ]
    let ans = [];
    for (let t of test) {
        ans.push(isValid(t))
    }
    console.log(ans);
}
main();