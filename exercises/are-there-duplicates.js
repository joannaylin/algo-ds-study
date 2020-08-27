// implement a function called areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among
// the arguments passed in

// areThereDuplicates([1,2,3])
// areThereDuplicates([1,2,2])
// areThereDuplicates(['a', 'b', 'c', 'a'])

function areThereDuplicates(arguments) {
  let results = {};
  for (let val in arguments) {
    results[arguments[val]] = (results[arguments[val]] || 0 ) + 1
  }
  for (let key in results) {
    if (results[key] > 1) {
      return true
    }
  }
  return false
}

areThereDuplicates([1,2,2]);
