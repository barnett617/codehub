
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {
  const rec2_at_left = rec2[2] <= rec1[0]
  const rec2_at_right = rec2[0] >= rec1[2]
  const rec2_at_top = rec2[1] >= rec1[3]
  const rec2_at_bottom = rec2[3] <= rec1[1]
  return !(rec2_at_left || rec2_at_right || rec2_at_top || rec2_at_bottom)
};