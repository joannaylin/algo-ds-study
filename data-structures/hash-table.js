/*
Hash Table
- used to store key-value pairs
- keys are not ordered
- fast for finding values, adding new values, and removing values

Hash Functions
- convert string into valid array index
- used to help protect data, authentication, cryptocurrency
- map input to an output of fixed size
- what makes a good hash? 
    - fast, uniform distribution, deterministic

Dealing with Collisions
- collisions are inevitable even with large arrays and a great hash function
- 2 strategies: 
    - Separate Chaining
        - we store values using more sophisticated data structure (array or linked list) at each index
        - if two things are the same index, store in array, search in the array
        - can have more items than the length of our array
    - Linear Probing
        - search through array to find the next empty slot
        - allows for a single key-value at each index


Big O (Time)
- access: N/A
- search: O(N)
- insertion: O(N)
- deletion: O(N)

Big O (Space)
- O(N)
*/

// note this HashTable implementation utilizes separate chaining in our hash function

class HashTable {
    constructor(size=4) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    
    // accept a key and value
    // hashes the key
    // stores the key-value pair in the hash table array via seaprate chaining
    set(key, value) {
        let index = this._hash(key);
        // check if anything is at keyMap[index]
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    // accepts a key
    // hashes the key
    // retrieves the key-value pair in the hash table
    // if key isn't found, returns undefined
    get(key) {
        let index = this._hash(key)
        // "if there is nothing at that index"
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                } 
            }
        }
        return undefined
    }

    // loop through hash table array and returns an array of keys in the table
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }

    // loop through hash table array and returns an array of values in the table
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])                        
                    }
                }
            }
        }
        return valuesArr;
    }

}

let ht = new HashTable();
ht.set("hello world", "goodbye!")
ht.set("dogs", "are cool")
ht.set("cats", "are cute too")
ht.set("i love", "coffee")