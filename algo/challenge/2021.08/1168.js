class UnionFind {
  constructor(size) {
    this.group = new Array(size + 1);
    this.rank = new Array(size + 1);
    for (let i = 0; i < size + 1; i++) {
      this.group[i] = i;
      this.rank[i] = 0;
    }
  }
  find(person) {
    if (this.group[person] !== person) {
      this.group[person] = this.find(this.group[person]);
    }
    return this.group[person];
  }
  
  union(person1, person2) {
    const group1 = this.find(person1);
    const group2 = this.find(person2);
    if (group1 === group2) {
      return false;
    }
  
    if (this.rank[group1] > this.rank[group2]) {
      this.group[group2] = group1;
    } else if (this.rank[group1] < this.rank[group2]) {
      this.group[group1] = group2;
    } else {
      this.group[this.group1] = group2;
      this.rank[group2] += 1;
    }
  
    return true;
  }
}


/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  const orderedEdges = new Array(n + 1 + pipes.length);

  for (let i = 0; i < wells.length; i++) {
    orderedEdges.push([0, i + 1, wells[i]]);
  }

  for (let i = 0; i < pipes.length; i++) {
    const edge = pipes[i];
    orderedEdges.push(edge);
  }

  orderedEdges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n);
  let totalCost = 0;
  orderedEdges.forEach(edge => {
    const house1 = edge[0];
    const house2 = edge[1];
    const cost = edge[2];
    if (uf.union(house1, house2)) {
      totalCost += cost;
    }
  })
  return totalCost;
};