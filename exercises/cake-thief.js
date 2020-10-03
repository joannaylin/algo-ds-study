// Interview Cake
// Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.
// spin off of unbounded knapsack problem 

// O(N*K) time and O(K) space
// N is the number of types of cakes
// K is the capacity of the duffel bag
// loop through each cake (N cakes) for every capacity (K capacities) -> O(N*K)
// maintaining array of K+1 capacities gives us O(K) space

function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // We make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    // Set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0;

    // loop through cake types
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      // If a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      // If the current cake weighs as much or less than the current weight capacity
      // it's possible taking the cake would get a better value
      if (cakeType.weight <= currentCapacity) {
        // So we check: should we use the cake or not?
        // maxValueUsingCake is the current cake's value plus the best value to fill the remaining capacity
        // remaining capacity is a lower capacity, so we'll always have already computed its max value and stored it in our array
        const maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

        // Now we see if it's worth taking the cake. how does the
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    // Add each capacity's max value to our array so we can use them
    // when calculating all the remaining capacities
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}

