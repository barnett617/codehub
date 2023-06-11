function binarySearch(arr, target) {
    let l = 0, r = arr.length;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) * 0.5);
        if (arr[mid] === target) return true
        if (arr[mid] < target) l = mid + 1
        else r = mid - 1
    }
    return false
}

export default binarySearch