// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    // hold the root trieNode in a variable called node
    let node = this.root;
    //itterate over the each letter in the word passed in as params
    for (const char of word) {
      //check if the node already exists
      if (!node.children[char]) {
        //if the node does  not it will add it
        node.children[char] = new TrieNode();
      }
      // shift our focus to the next node
      node = node.children[char];
    }
    //set the end of a word to true one the loop is exited
    node.isEndOfWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   * Objective: itterate over the word passed in as params;
   *            see if that letter exits inside of the root;
   *                if true ~ it will shift focus to that node and research;
   *                if false return false the string could not be found;
   *            finally check if the current node is an endOfWord node;
   */
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return false;
      }
    }
    return node.isEndOfWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const char of word) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return false;
      }
    }
    return true;
  }
}

var obj = new Trie();
obj.insert("apple");
// var param_2 = obj.search(word);
// var param_3 = obj.startsWith(prefix);

class Trie {
  constructor() {
    this.root = new Set();
    this.prefix = new Set();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    this.root.add(word);
    for (let i = word.length; i > 0; i--) {
      let substr = word.substring(0, i);
      if (this.prefix.has(substr)) break;
      this.prefix.add(substr);
    }
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.root.has(word);
  }
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.prefix.has(prefix);
  }
}
