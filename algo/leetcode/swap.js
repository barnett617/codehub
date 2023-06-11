var swapWithPlusMinus = function(a, b) {
    // 改变 a 变为 ab 之和
    a = a + b;
    // 此时 a 已变，是 ab 之和，减去 b 即是 a, 将原本的 a 赋予 b
    b = a - b;
    // 此时的 b 已是原本的 a ，而 a 仍是 ab 之和，则减去 现在的 b (值为原本的 a) 即是原本的 b
    a = a - b;
    // 完成交换
};

var swapWithXOR = function(a, b) {
    // 改变 a 变为 ab 之异或
    a = a ^ b;
    // 此时 a 已变，是 ab 之异或(a === a ^ b)，再去异或 b 即是原本的 a <=> a ^ b ^ b === a
    b = a ^ b;
    // 此时的 b 已是原本的 a ，而 a 仍是 ab 之异或，再去异或现在的 b （值为原本的 a）即是 b <=> a ^ b ^ a === b
    a = a ^ b;
    // 完成交换
}