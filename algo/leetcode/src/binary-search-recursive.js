function binarySearch(arr, target) {
    return find(arr, target, 0, arr.length)
    function find(arr, target, l, r) {
        if (l > r) return false
        let mid = Math.floor(l + (r - l) * 0.5);
        if (arr[mid] === target) return true
        if (arr[mid] > target) find(arr, target, l, r - 1)
        else find(arr, target, l + 1, r)
    }
}

export default binarySearch