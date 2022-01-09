/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
 var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
      let celebrityCandidate = 0;
      for (let i = 0; i < n; i++) {
        if (knows(celebrityCandidate, i)) {
          celebrityCandidate = i;
        }
      }
    
      if (isCelebrity(celebrityCandidate)) {
        return celebrityCandidate;
      }
      return -1;
      
      function isCelebrity(i) {
          for (let j = 0; j < n; j++) {
              if (i === j) continue;
              if (knows(i, j) || !knows(j, i)) return false;
          }
          return true;
      }
  };
};

module.exports = solution;