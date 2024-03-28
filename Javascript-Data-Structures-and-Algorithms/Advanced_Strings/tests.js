'use strict'
const Trie = require('./modules/Trie');
const BoyerMore = require('./modules/buildBadMatchTable');

const Test = {
  create() {
    let trie = new Trie();
    trie.insert("simran");
    // trie.insert("sammie");
    return trie;
  },

  search() {
    let trie = this.create();
    console.log(trie.search("simran"));
    // console.log(trie.search("sammie"));
    // console.log(trie.search("klers"));
    // console.log(trie.search("fake"));
    // console.log(trie.search("sam"));
  }, 

  delete() {
    let trie = this.create();
    this.delete("simran");
  },

  BoyerMore() {
    let boyerMore = new BoyerMore();
    // console.log(boyerMore.search('jellyjam','jam'));
    console.log(boyerMore.search('jellyjam','jelly'));
    // console.log(boyerMore.search('jellyjam', 'sam'));
  }
}
Test.BoyerMore();


