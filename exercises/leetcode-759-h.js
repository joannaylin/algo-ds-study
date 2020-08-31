// LeetCode 759: Employee Free Time (Hard)

/*
We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

(Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined).  Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
Output: [[5,6],[7,9]]
*/

/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */

var employeeFreeTime = function(schedule) {
  // need to flatten array
  schedule = [].concat(...schedule);
  schedule.sort((a, b) => a.start - b.start);
  
  let intervals = [schedule[0]];
  
  for (let i = 1; i < schedule.length; i++) {
      const prev = intervals.pop();
      const current = schedule[i];
      
      // check for overlap
      if (prev.end >= current.start) {
          const start = Math.min(prev.start, current.start);
          const end = Math.max(prev.end, current.end);
          intervals.push(new Interval(start, end));
      } else {
          intervals.push(prev);
          intervals.push(current);
      }
      
  }
  
  // find the gap between intervals
  let result = [];
  for (let i = 1; i < intervals.length; i++) {
      const prev = intervals[i - 1];
      const current = intervals[i];

      // gap
      result.push(new Interval(prev.end, current.start));
  }
  
  return result;
};



// Other Solutions
var employeeFreeTime = function(schedule) {
  let m = new Map();
  let ans = []
  
  schedule.forEach(employee => employee.forEach(i => {
      m.set(i.start, Math.max((m.get(i.start) || 0), i.end))
  }));
  
  let sorted = [...m.entries()].sort((a, b) => a[0] - b[0]);
  let pre = sorted.length ? sorted[0][0] : 0; // init previous end to current begin
  for (let [cur, end] of sorted) {
      if (pre < cur) {
          ans.push(new Interval(pre, cur)); // gap [previous end 👉 current begin] 🎯
      }
      pre = Math.max(pre, end); // previous end is maximum end seen so far
  }
  return ans;
};


var employeeFreeTime = function(schedule) {
  let start = [];
  let end = [];
  for (let employee of schedule) {
      for (let interval of employee) {
          start.push(interval.start);
          end.push(interval.end);
      }
  }
  start.sort((a,b)=>a-b);
  end.sort((a,b)=>a-b);
  let preEnd = Infinity;
  let freeTime = [];
  for (let i=0;i<start.length;i++) {
      if (start[i] > preEnd) {
          freeTime.push(new Interval(preEnd, start[i]))
      } 
      preEnd = end[i];
  }
  return freeTime;
};