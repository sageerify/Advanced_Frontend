// Define the original functions
function addNumbers(a, b) {
    return a + b;
  }
  
  function subtractNumbers(a, b) {
    return a - b;
  }
  
  // Export with renamed names
  export { addNumbers as add, subtractNumbers as subtract };
  