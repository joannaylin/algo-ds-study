// LeetCode 981: Time Based Key-Value Store (Medium)

/*
Create a timebased key-value store class TimeMap, that supports two operations.

1. set(string key, string value, int timestamp)

Stores the key and value, along with the given timestamp.
2. get(string key, int timestamp)

Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
If there are multiple such values, it returns the one with the largest timestamp_prev.
If there are no values, it returns the empty string ("").


Example:
Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output: [null,null,"bar","bar",null,"bar2","bar2"]
Explanation:   
TimeMap kv;   
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1   
kv.get("foo", 1);  // output "bar"   
kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"   
kv.set("foo", "bar2", 4);   
kv.get("foo", 4); // output "bar2"   
kv.get("foo", 5); //output "bar2" 
*/


// Solution 1
/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.map[key]) {
      this.map[key].push({value, timestamp})
  } else {
      this.map[key] = [{value, timestamp}]    
  }
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map[key]) return ""
  
  const items = this.map[key]
  
  let l = 0;
  let r = items.length -1;
  
  while (l < r) {
      const mid = Math.floor((l+r)/2)
      
      if (items[mid].timestamp < timestamp) {
          l = mid + 1;
      } else {
          r = mid;
      }
  }
  
  if (items[l] && items[l].timestamp <= timestamp) return items[l].value
  if (items[l-1] && items[l-1].timestamp <= timestamp) return items[l-1].value
  
  return "";
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/



// Solution 2

var TimeMap = function() {
  this.map = {};
};

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  var combinedKey = `${key}${timestamp}`;
  this.map[combinedKey] = value;
};

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  while (timestamp > 0) {
      var combinedKey = `${key}${timestamp}`;
      if (combinedKey in this.map) return this.map[combinedKey];
      timestamp -= 1;
  }

  return '';
};


// Solution 3 (Using Map data structure)

var TimeMap = function() {
  this.map = new Map();
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, []);
  let item = this.map.get(key);
  item[timestamp] = value;
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map.has(key)) return "";
  let item = this.map.get(key);
  for (let i = timestamp;i>=0;i--) {
      if(item[i] != null) {
          return item[i];
      }
  }
  return "";
};