export class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new node(value, this.head);
  }

  append(value) {
    if (this.head == null) {
      this.head = new node(value);
    } else {
      let currentNode = this.head;
      while(currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new node(value);
    }
  }

  size() {
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.nextNode;
      i++;
    }
    return i;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  
  pop() {
    let currentNode = this.head;
    let lastNode = null;
    while(currentNode.nextNode) {
      lastNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    lastNode.nextNode = null;
  }

  at(index) {
    let ans = null;
    let node = this.head;
    let i = 1;
    while(node && i <= index) {
      if (i == index) {
        ans = node;
        break;
      }
      node = node.nextNode;
      i++;
    }
    return ans;
  }

  contains(value) {
    let flag = false;
    let node = this.head;
    while(node) {
      if (node.value == value) {
        flag = true;
        break
      } else {
        node = node.nextNode;
      }
    }

    return flag;
  }
  
  find(value) { 
    let index = 1;
    let node = this.head;
    while(node) {
      if (node.value == value) {
        return index;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }
  
  toString() {
    let str = "";
    let node = this.head;
    while(node) {
      str = `${str}( ${node.value} ) -> `;
      node = node.nextNode;
    }
    str = `${str}null`;
    return str;
  }

  insertAt(value, index) { 
    if (index == 1) {
      this.head = new node(value, this.head);
    } else if (index <= 0 || index > this.size()) {
      return "Error: Incorrect Index!";
    } else {
        let firstNode = this.head;
        let secondNode = firstNode.nextNode;
        let i = 2;
        while(i < index) {
          firstNode = secondNode;
          secondNode = secondNode.nextNode;
          i++;
        }
        firstNode.nextNode = new node(value, secondNode);
    }
  }

  removeAt(index) {
    if (index <= 0 || index > this.size()) {
      return "Error: Incorrect Index!";
    } else if (index === 1) {
      this.head = this.head.nextNode;
    } else {
      let i = 2;
      let firstNode = this.head;
      let secondNode = firstNode.nextNode;
      while(i < index) {
        firstNode = secondNode;
        secondNode = secondNode.nextNode;
        i++;
      }
      firstNode.nextNode = secondNode.nextNode;
    }
  }

}

