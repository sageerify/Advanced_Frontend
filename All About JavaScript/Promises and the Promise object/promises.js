function createFunctionsArray() {
    // Parent function returning another function
    const names = ["Saima", "Akhtar", "Ali"];
    const greetings = names.map((name) => {
      return function () {
        console.log(`Hello, ${name}!`);
      }; // Returning a function for each name
    });
  
    return greetings; // Returning an array of functions
  }
  
  const functionsArray = createFunctionsArray(); // Call parent function to create array
  
  // Call each function from the array
  functionsArray.forEach((func) => func()); // Outputs: Hello, Saima! Hello, Akhtar! Hello, Ali!
  
  // Example with Promises
  let states = ["pending", "fulfilled", "rejected"];
  const promiseStates = states.map((state, index) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfilled") {
          resolve(`Promise ${index + 1}: State is ${state}`);
        } else {
          reject(`Promise ${index + 1}: State is ${state}`);
        }
      }, (index + 1) * 2000); // Adding delay for each promise
    });
  });
  
  // Handle the promises
  promiseStates.forEach((promise) =>
    promise
      .then((message) => console.log(message))
      .catch((err) => console.log(err))
  );
  