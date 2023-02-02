// Write a program that outputs the top n elements from a list.

const largest = (n, arr) => {
  let count = 1;
  let finalArr = [];

  while (count <= n) {
    let sorted = arr.sort((a, b) => a - b)[arr.length - count];
    finalArr.unshift(sorted);
    count++;
  }
  return finalArr;
};

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [9, 10]
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])); // [3, 5, 9, 13, 22, 50, 63]
