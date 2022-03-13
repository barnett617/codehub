// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true

// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false


// Example 3:

//     5
//    / \
//   1   8
//      / \
//     7   

// Input: [5,1,8,null,null,7,null]
// Output: false

// Example 4:
//     5
//    / \
//   1   8
//      / \
//         9

// Input: [5,1,8,null,null,null,9]
// Output: false

function isBinarySearchTree(arr) {
    if (!arr || !arr.length) return true;
    let res = true;

    const isValid = (left, root, right) => left < root && root < right;

    let index = 0;
    //     5
    //    / \
    //   1   8
    //      / \
    //     7   

    // Input: [5,1,8,null,null,7,null]
    // Output: false
    while (index < arr.length) {
        let root = arr[index];
        let leftChildIndex = index * 2 + 1;
        let rightChildIndex = index * 2 + 2;
        let left = arr[leftChildIndex];
        let right = arr[rightChildIndex];
        if (!root) {
            index++;
            continue;
        } else if (!left && !right) {
            index++;
            continue;
        } else if ((left && !right && left < root)) {
            index++;
            continue;
        } else if ((right && !left) && right > root) {
            index++;
            continue;
        } else {
            return false;
        }
        if (root !== undefined && left != null && right != null) {
            if(isValid(left, root, right)) {
                index++;
                continue;
            } else {
                return false;
            }
        } 
    }

    return res;
}

const testcase = [
    [2,1,3],
    [5,1,4,null,null,3,6],
    [5,1,8,null,null,7,null],
    [5,1,8,null,null,null,9]
]
testcase.forEach(test => {
    console.log(isBinarySearchTree(test));
})


// 机器学习平台
// for DS
// 拖拽
// pipeline

// 训练模型

// 查log
// csv yml

// AML studio

// STCA

// lowcode

// UX Model大 体验流畅 性能优化 健壮性

// draw.io

// canvas webgl svg

// A11




