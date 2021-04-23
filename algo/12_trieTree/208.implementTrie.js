var Trie = function() {
    this.root = {};
    this.end = '#';
}
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let s of word) {
        if (!node[s]) {
            node[s] = {};
        }
        node = node[s];
    }
    node[this.end] = this.end;
}
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let s of word) {
        if (!node[s]) {
            return false;
        }
        node = node[s];
    }
    if (node[this.end]) return true;
    return false;
}
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let s of prefix) {
        if (!node[s]) {
            return false;
        }
        node = node[s];
    }
    return true;
}
function main() {
    const trie = new Trie();
    console.log(trie.insert('apple'));
    console.log(trie.search('apple'));
    console.log(trie.search('app'));
    console.log(trie.startsWith('app'));
    console.log(trie.insert('app'));
    console.log(trie.search('app'));
}
main();