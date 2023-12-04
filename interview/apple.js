// 业务多
// 去年成立业务团队
// 销售数据
// 面向销售人员

// 算法结果包装
// 销售
// 面向店铺

// antv -> 

// 010111 -> 000111 (1)
// 100000 -> 000000 (1)

// 000 -> 000 (0)
// 000 -> 
// 000 ->  
// 111 -> 111 (0)

// 目标状态：得到一个左边都是0，右边都是1的序列（0不能在1的右边，1右边没有0）
// output: 操作次数（把1变成0，或者把0变成1）


// 1 <- 


// 1 0
// 0 <- 0 1
function countOperation(str) {
    let count = 0;
    
    function isValid() {
    
    }
    
    
    
    isValid(str);
  }
  
  // 1->3-2->4->null
  
  // null 1  3-2-4-null
  // null<-1 3-2-4-null
  
  function reverseLinklist(root) {
    let cur = root;
    let prev = null;
    while (cur) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }