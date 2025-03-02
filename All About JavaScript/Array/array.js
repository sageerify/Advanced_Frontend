// Introduction to Arrays in JavaScript
console.log("### Introduction to Arrays in JavaScript ###");

// 1. Creating an Array
console.log("\n--- Creating an Array ---");
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits Array:", fruits);

// 2. Accessing Array Elements
console.log("\n--- Accessing Array Elements ---");
console.log("First Element:", fruits[0]); // Apple
console.log("Second Element:", fruits[1]); // Banana
console.log("Third Element:", fruits[2]); // Cherry

// 3. Adding Elements to an Array
console.log("\n--- Adding Elements to an Array ---");
// Using push (adds to the end)
fruits.push("Orange");
console.log("After push:", fruits);

// Using unshift (adds to the beginning)
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

// 4. Removing Elements from an Array
console.log("\n--- Removing Elements from an Array ---");
// Using pop (removes from the end)
let removedElement = fruits.pop();
console.log("Removed Element (pop):", removedElement);
console.log("After pop:", fruits);

// Using shift (removes from the beginning)
removedElement = fruits.shift();
console.log("Removed Element (shift):", removedElement);
console.log("After shift:", fruits);

// 5. Finding the Length of an Array
console.log("\n--- Finding the Length of an Array ---");
console.log("Length of Fruits Array:", fruits.length);

// 6. Iterating Through an Array
console.log("\n--- Iterating Through an Array ---");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// 7. Common Array Methods
console.log("\n--- Common Array Methods ---");

// indexOf (Find the index of an element)
console.log("Index of 'Banana':", fruits.indexOf("Banana"));

// includes (Check if an element exists)
console.log("Does the array include 'Cherry'? :", fruits.includes("Cherry"));

// splice (Add/Remove elements at a specific index)
console.log("Using splice to add 'Mango' at index 1");
fruits.splice(1, 0, "Mango");
console.log("After splice:", fruits);

// slice (Create a new array by slicing a portion)
console.log("Using slice to create a sub-array (index 1 to 3)");
let subArray = fruits.slice(1, 3);
console.log("Sub-array:", subArray);

// join (Combine all elements into a string)
console.log("Join elements with a hyphen:", fruits.join(" - "));

// reverse (Reverse the array)
console.log("Reversing the array:");
fruits.reverse();
console.log("After reverse:", fruits);

// sort (Sort the array alphabetically)
console.log("Sorting the array:");
fruits.sort();
console.log("After sort:", fruits);

// 8. Working with Nested Arrays
console.log("\n--- Working with Nested Arrays ---");
let nestedArray = [["A", "B"], ["C", "D"], ["E", "F"]];
console.log("Nested Array:", nestedArray);
console.log("Accessing 'D':", nestedArray[1][1]);

// 9. Spread Operator and Arrays
console.log("\n--- Spread Operator and Arrays ---");
let newFruits = [...fruits, "Pineapple"];
console.log("Original Fruits Array:", fruits);
console.log("New Fruits Array with Spread Operator:", newFruits);

// 10. Map, Filter, and Reduce
console.log("\n--- Map, Filter, and Reduce ---");

// map (Transform each element)
let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Uppercase Fruits (map):", upperCaseFruits);

// filter (Filter elements based on a condition)
let filteredFruits = fruits.filter((fruit) => fruit.startsWith("B"));
console.log("Fruits starting with 'B' (filter):", filteredFruits);

// reduce (Reduce the array to a single value)
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + " " + fruit, "");
console.log("Concatenated Fruits (reduce):", concatenatedFruits.trim());

// Conclusion
console.log("\n### Arrays are a versatile and essential feature in JavaScript! ###");
