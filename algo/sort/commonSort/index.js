/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    // Solution 1: Sort
    // Solution 2: Heap
    // Solution 3: QucikSelect

    // Sort

    // sort(nums, false, 'bubble');
    // sort(nums, false, 'insert');
    // sort(nums, false, 'select');

    const sorted = sort(nums, true, 'quick')
    return sorted[k - 1];

    function sort(nums, desc = false, type = 'quick') {
        if (nums.length < 2) return nums;
        
        if (type === 'bubble') {
            return bubbleSort(nums);
        } else if (type === 'insert') {
            return insertSort(nums);
        } else if (type === 'select') {
            return selectSort(nums);
        } else if (type === 'merge') {
            return mergeSort(nums);
        } else {
            return quickSort(nums);
        }

        function swap(nums, a, b) {
            let temp = nums[a];
            nums[a] = nums[b];
            nums[b] = temp;
        }
        // [4,5,6,1,2,3] -> [4,5,1,2,3,6] -> [4,1,2,3,5,6] -> [1,2,3,4,5,6]
        function bubbleSort(nums) {
            // 每轮找到一个最值（泡泡）冒出来，如果某一轮没有产生冒泡，则意味排序排序结束
            for (let i = 0; i < nums.length; i++) {
                let swaped = false;
                for (let j = 0; j < nums.length - 1 - i; j++) {
                    const swapForAsc = !desc && nums[j] > nums[j+1];
                    const swapForDesc = desc && nums[j] < nums[j+1];
                    if (swapForAsc || swapForDesc) {
                        swap(nums, j, j+1);
                        if (!swaped) swaped = true;
                    }
                }
                if (!swaped) break;
            }
            return nums;
        }

        // [4,1,6,5,2,3] -> [1,4,6,5,2,3] -> [1,4,5,6,2,3] -> [1,2,4,5,6,3] -> [1,2,3,4,5,6]
        function insertSort(nums) {
            // 从第二个元素开始，假设前面是有序的，后面是无序的，找到合适位置插入
            for (let i = 1; i < nums.length; i++) {
                const cur = nums[i];
                let j = i - 1;
                for (; j >= 0; j--) {
                    const moveForAsc = !desc && nums[j] > cur;
                    const moveForDesc = desc && nums[j] < cur;
                    if (moveForAsc || moveForDesc) {
                        nums[j+1] = nums[j];
                    } else {
                        break;
                    }
                }
                if (nums[j+1] !== cur) {
                    nums[j+1] = cur
                }
            }
            return nums;
        }

        // [4,5,6,1,2,3] -> [1,5,6,4,2,3] -> [1,2,6,4,5,3] -> [1,2,3,4,5,6]
        // [6,5,4,3,2,1] -> [1,5,4,3,2,6] -> [1,2,4,3,5,6] -> [1,2,3,4,5,6]
        function selectSort(nums) {
            // 选择最值进行放置，从第一个元素开始，先假设第一个元素是最值，然后遍历每个元素，不断更新最值索引
            // 一轮结束后，将真正的最值与一开始的假设的值进行交换
            for (let i = 0; i < nums.length; i++) {
                let cur = i;
                for (let j = i + 1; j < nums.length; j++) {
                    const updateForAsc = !desc && nums[j] < nums[cur];
                    const updateForDesc = desc && nums[j] > nums[cur];
                    if (updateForAsc || updateForDesc) {
                        cur = j;
                    }
                }
                if (i !== cur) {
                    swap(nums, i, cur);
                }
            }
            return nums;
        }

        // [4,5,6,1,2,3]
        // [2,1]
        // [5,2,4,1,3,6,0]
        // [3,2,1]
        function mergeSort(nums) {
            // 分而治之，将数组从中间一分为二，然后分别对两个子数组递归排序，最后将排序好的子数组合入新数组，即得到有序数组
            function helper(nums, left, right) {
                // 什么时候返回
                if (left >= right) return [nums[left]];

                const mid = left + Math.floor((right - left) / 2)
                const leftPart = helper(nums, left, mid);
                const rightPart = helper(nums, mid+1, right);
                return mergeAndSort(leftPart, rightPart);
            }
            function mergeAndSort(leftSubArr, rightSubArr) {
                let i = 0;
                let j = 0;
                let arrIndex = 0;
                const newArr = new Array(leftSubArr.length + rightSubArr.length);
                while (i < leftSubArr.length && j < rightSubArr.length) {
                    if (!desc) {
                        if (leftSubArr[i] < rightSubArr[j]) {
                            newArr[arrIndex++] = leftSubArr[i++];
                        } else {
                            newArr[arrIndex++] = rightSubArr[j++];
                        }
                    } else {
                        if (leftSubArr[i] > rightSubArr[j]) {
                            newArr[arrIndex++] = leftSubArr[i++];
                        } else {
                            newArr[arrIndex++] = rightSubArr[j++];
                        }
                    }
                }
                while (i < leftSubArr.length) {
                    newArr[arrIndex++] = leftSubArr[i++];
                }
                while (j < rightSubArr.length) {
                    newArr[arrIndex++] = rightSubArr[j++];
                }
                return newArr;
            }
            return helper(nums, 0, nums.length - 1);
        }

        // [4,5,6,1,2,3] -> [1,5,6,4,2,3] -> [1,2,6,4,5,3] -> [1,2,3,4,5,6]
        function quickSort(nums) {
            // 分治思想：对于一个给定数组，将其指定区间内的元素进行快速排序
            // 通过分区函数找到分区点，然后以分区点进行划分左右区间，分别将左右区间各自进行快速排序
            function helper(nums, start, end) {
                if (start >= end) return;

                const pivotIndex = partition(nums, start, end);
                helper(nums, start, pivotIndex - 1);
                helper(nums, pivotIndex + 1, end);
            }

            // 分区函数：假设以末尾值作为分区值，临时指定开始位置为分区点，然后遍历每个元素
            // 遍历过程中，将小于/大于分区值的元素放到一侧，这样也就意味着分区点的位置可以移动一位
            // 当所有遍历结束后，分区点结束的位置，就是分区点应该放置的索引位置，此时将末尾值与其交换
            function partition(nums, start, end) {
                let pivot_value = nums[end];
                let pivot_index = start;
                for (let i = start; i < end; i++) {
                    const swapForAsc = !desc && nums[i] < pivot_value;
                    const swapForDesc = desc && nums[i] > pivot_value;
                    if ((swapForAsc || swapForDesc)) {
                        swap(nums, i, pivot_index);
                        pivot_index++;
                    }
                }
                swap(nums, pivot_index, end);
                return pivot_index;
            }

            helper(nums, 0, nums.length - 1);
            return nums;
        }

    }
};