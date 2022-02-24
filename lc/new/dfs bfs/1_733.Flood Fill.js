// https://leetcode.com/problems/flood-fill/

// 思路：创建一个帮助函数，用于DFS递归调用
// 递归函数内先声明终止条件，即到达遍历边界，或内容不符
// 然后执行主逻辑，即更新颜色
// 最后对四个方向递归调用

// TIME: O(mn)
// SPACE: O(mn)

function floodFill(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;
    helper(image, sr, sc, image[sr][sc], newColor);

    function helper(image, sr, sc, color, newColor) {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] !== color) return;
        image[sr][sc] === newColor;
        helper(image, sr-1, sc, color, newColor);
        helper(image, sr+1, sc, color, newColor);
        helper(image, sr, sc-1, color, newColor);
        helper(image, sr, sc+1, color, newColor);
    }

    return image;
}