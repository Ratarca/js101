/*
 Set is a built-in data structure that represents a collection of unique values. Sets are designed to store distinct values, 
 and they do not allow duplicate entries. This makes Sets useful for tasks where you need to work with a collection of items without repetition. \

Note: In JS we not use a lot of set because they doesnt have methods like union,intersection,join and another useful methods.
*/

// Create
const Numbers = new Set([1,2,3,4,5]);
const fruits = new Set();

// Add & Remove
fruits.add('banana');
fruits.add('apple');
fruits.add('pineapple');
fruits.add('watermelon');
fruits.delete('banana');

// Check Existence & Size
let hasBanana = fruits.has('apple')
let sizeSet = fruits.size

console.log(hasBanana, sizeSet)

// Slice : convert to slice and slice

