// LeetCode 811: Subdomain Visit Count (Medium)

/*
A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

// using while loop
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  let results = []

  for (let i = 0; i < cpdomains.length; i++) {
    let values = cpdomains[i].split(" ")
    let count = parseInt(values[0])
    let domains = values[1]
    
    while (domains) {
      let total = count;
      if (map.has(domains)) {
        total += map.get(domains)
      }

      map.set(domains, total)

      if (domains.indexOf(".") === -1) {
        domains = null;
      } else {
        let nextDomainIndex = domains.indexOf(".") + 1
        domains = domains.substring(nextDomainIndex, domains.length)
      }
    }    
  }
  
  map.forEach((num, domain) => {
    return results.push(`${num} ${domain}`)
  })
  
  return results
};


// recursively
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  let results = []

  for (let i = 0; i < cpdomains.length; i++) {
    let values = cpdomains[i].split(" ")
    let count = parseInt(values[0])
    let domains = values[1]
    
    function visits(domains, count) {
      let total = count;
      if (map.has(domains)) {
        total += map.get(domains)
      }

      map.set(domains, total)

      if (domains.indexOf(".") === -1) return

      let nextDomainIndex = domains.indexOf(".") + 1
      domains = domains.substring(nextDomainIndex, domains.length)

      return visits(domains, count)
    }

    visits(domains, count)
  }
  
  map.forEach((num, domain) => {
      return results.push(`${num} ${domain}`)
  })
  
  return results
};


// 900 google.mail.com
  // 900 mail.com
  // 900 google.mail.com

// 50 yahoo.com
  // 50 yahoo.com

// 1 intel.mail.com
  // 1 mail.com
  // 1 intel.mail.com

// 5 wiki.org
  // 5 wiki.org

// 901 mail.com
// 900 google.mail.com
// 50 yahoo.com
// 1 mail.com
// 1 intel.mail.com
// 5 wiki.org

