/* 
Simple Balanced Parentheses (utilizing stack)
- each opening symbol has a corresponding closing symbol and pairs of parentheses are properly nested
- process symbols from left to right
  - most recent opening parens must match the next closing symbol -> "((()"
  - first opening parens may have to wait until very last symbol for its match -> "(()())"
  - closing symbols match opening symbols in the reverse order of their appearance (inside out)
  - indications of using a stack^^
*/

// parentheses checker
var parChecker = function(string) {
  let result = true;
  let parens = []; // <-- used as a stack! 

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      parens.push("(")
    } else {
      // if element is equal to ")", then pop off last item from parens (match!!)
      if (parens.length > 0) {
        parens.pop();
      } else {
        result = false;
      }
    }
  }

  // check if there are any open parens left in stack
  // necessary for "(()"
  if (parens.length > 0) result = false;

  return result;
}

parChecker("((()))") // true
parChecker("(()") // false
parChecker("(()())") // true

// more general case for parchecker to include {} and []
var parChecker = function(string) {
  let result = true;
  let parens = []; // can be a stack 
  let open = ["(", "{", "["]
  let closed = [")", "}", "]"]

  for (let i = 0; i < string.length; i++) {
    if (open.includes(string[i])) {
      parens.push(string[i])
    } else {
      // confirm that appropriate parens are matched -> check last parens' index in open (should match closed index of element)
      if (parens.length > 0 && open.indexOf(parens[parens.length-1]) === closed.indexOf(string[i])) { 
        parens.pop();
      } else {
        result = false;
      }
    }
  }

  if (parens.length > 0) result = false;

  return result;
}

parChecker("([)") // false
parChecker("(({[]}))") // true
parChecker("[{}]()") // true