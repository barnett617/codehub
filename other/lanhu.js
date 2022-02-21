// 继承
// a函数继承b函数 Object.create
// map和hashMap，性能区别

function TreeNode(id, children) {
    this.id = id;
    this.children = children || [];
}

// 节点本身可以节点自己的祖先节点

// 1.创建帮助函数，用于递归调用节点
// 2.判断节点为空，则返回空
// 3.创建一个变量用于统计这一次遍历是否有效（本次遍历中是否出现过成为最近公共祖先的潜在节点）
// 4.

/**
            1
    2       3       4
  5  6    7  8     9 10


  5 6 3 4 -> 1


  1 2 7 8 -> 1
  5 6 -> 2

 */

function lowestCommonAncestor(root, nodes) {
    let res = null;

    function helper(root, nodes) {
        if (!root) return 0;
        let count = 0;
        for (const child of root.children) {
            count += helper(child, res);
        }
        if (nodes.includes(root)) {
            count += 1;
        }

        if (count === nodes.length) {
            res = root;
            return;
        }

        return count;
        
    }
    helper(root, nodes);

/**
            1
    2       3       4
  5  6    7  8     9 10

  5 6 3 4 -> 1

  1 2 7 8 -> 1
  5 6 -> 2

 */

  map 

  object

  {
      a: 1
  }

  WeakMap()
  Map()

  map.set()
  map.get()

  {
      '[1,3,4]': 2,
      '[1,3,4]': 3
  }

    const stack = [root];
    // const parentMap = new Map();
    const parentMap = {};
    while (!stack.length) {
        const node = stack.pop();
        for (const child of node.children) {
            parentMap.set(child, node);
            stack.push(child);
        }
    }
    const ancestors = new Set();
    for (let child of nodes) {
        // while (ancestors.size > 0) {
        //     while (!ancestors.has(child.val)) {
        //         child = parentMap.get(child);
        //     }

        // }
        while (child) {
            ancestors.add(child.val);
            child = parentMap.get(child);
        }
    }
    

    return res;
}

// mastergo

// lanhu -> mastergo

// sketch -> figma

// 图形化
// 拖拽

// c++ <- wasm

// 基础架构组
// 画布组 对接 C++
// 协同组 对接用户功能
// 社区组 官网、分享、帖子（vue/react）

// 架构、性能、业务

// 共22 -> 30-40

// 蓝湖

// 10 8 5.5

// 8 -> 70%

// 周五对OKR 1h

// 双周分享 周三 15：00-16:00，自愿参加

// TO

