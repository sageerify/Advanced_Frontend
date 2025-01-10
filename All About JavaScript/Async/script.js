// Simulate a task that takes 2 seconds
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000); // 2-second delay
    });
  }
  
  // Using async/await
  async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Wait for fetchData to complete
    console.log(data); // Logs "Data fetched!" after 2 seconds
  }
  
  getData();
  