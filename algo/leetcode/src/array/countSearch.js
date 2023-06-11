/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // 1. count the number of students per height
    // 2. go throught the buckets
    // 3. if the student is a different height than expected, he is in the wrong place, count it
    // 4. after counting the wrong one, decrease
    
    var ans = 0;
    var buckets = new Array(101).fill(0);
    for (var i = 0; i < heights.length; i++) {
        ++buckets[heights[i]];
    }
    var bucket = 1;
    for (var i = 0; i < heights.length; i++) {
        while (buckets[bucket] === 0) {
            ++bucket;
        }
        if (heights[i] !== bucket) {
            ++ans;
        }
        --buckets[bucket];
    }
    return ans
};

console.log(heightChecker([1,1,4,2,1,3]))