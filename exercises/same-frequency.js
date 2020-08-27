// given two positive integers, find out if the two numbers have the same frequency

// sameFrequency(34, 14) false
// sameFrequency(182, 281) true

// attempt: 
// function sameFrequency(num1, num2){
//   let numbers = {};
//   let first = num1.toString.split("");
//   let second = num2.toString.split("");
  
//   if (first.length !== second.length) {
//       return false
//   }
  
//   for (const i in first) {
//       numbers[i] = (numbers[i] || 0) + 1;
//   }
  
//   for (const j in second) {
//       if (numbers[j]) {
//           numbers[j] -= 1
//       } else {
//           return false
//       }
//   }
  
//   if (numbers) {
//       return true
//   }
  
// }

// solution:

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  
  if (first.length !== second.length) {
      return false
  }

  let countNum1 = {};
  let countNum2 = {};
  
  for (let i = 0; i<strNum1.length; i++) {
      countNum1[i] = (countNum1[i] || 0) + 1;
  }
  
  for (let j = 0; j<strNum2.length; j++) {
      countNum2[j] = (countNum2[j] || 0) + 1;
  }
  
  for (let key in countNum1) {
      if (countNum1[key] !== countNum2[key]) {
          return false
      }
  }
  return true
}