import LinkedList from "./linked_list.js";

export default class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
  
  set(key, value) {

    if ((this.capacity * this.loadFactor) < this.length() + 1) {
      let temp = this.entries();
      this.clear();
      this.capacity = this.capacity * 2;
      temp.forEach(element => {
        this.set(element[0], element[1]);
      });
    }

    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    if(this.buckets[index]) {
      this.buckets[index].value.append(value);
    } else {
      this.buckets[index] = {
        key: key,
        value: new LinkedList
      }
      this.buckets[index].value.append(value)
    }
    
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    if (key === this.buckets[index].key) {
      return this.buckets[index].value;
    }
    return null;
  }

  has(key) {
    let index = this.hash(key);
    let ans = false;
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.buckets[index]) {
      if (this.buckets[index].key === key) {
        ans = true;
      }
    }
    return ans;
  }
  
  remove(key) {

    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    let ans = this.has(key);
    if (ans === true) {
      delete this.buckets[index] ;
    }
    return ans;
  }

  length() {
    let sum = 0;
    this.buckets.forEach(element => {
      if(element.key) {
        sum++;
      }
    }); 
    return sum;
  }

  clear() {
    this.buckets = [];
  }

  keys() {
    let arr = [];
    this.buckets.forEach(element => {
      if(element.key) {
        arr.push(element.key);
      }
    }); 
    return arr;
  }

  values() {
    let arr = [];
    this.buckets.forEach(element => {
      if(element.key) {
        arr.push(element.value);
      }
    }); 
    return arr;
  }

  entries() {
    let arr = [];
    this.buckets.forEach(element => {
      if(element.key) {
        arr.push([element.key,element.value]);
      }
    }); 
    return arr;
  }

}
