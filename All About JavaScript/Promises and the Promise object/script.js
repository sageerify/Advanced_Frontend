// function 2dra  function ko return krta hai

function finalResult() {
    // parent function
    let name = "saima";
    // console.log(lName);
    function displayName() {
      // child function
      let lName = "AKhtar";
      console.log(`my name is ${name}`);
    }
    function lastName() {
      console.log(`my last name is ${name}`);
    }
    displayName();
    lastName();
  }
  finalResult();
  //  console.log(name());
  
  let myName = "saima";
  let loadingState = "pending";
  const displayName1 = new Promise((resolve, reject) => {
    console.log(`promise is ${loadingState}`);
    setInterval(() => {
      if (myName === "saima") {
        resolve("welcome saima");
        loadingState = "fulfilled";
      } else {
        reject("sorry verification failed");
        loadingState = "rejected";
      }
    }, 5000);
  })
    .then((message) => {
      console.log(message);
      console.log(`current state: ${loadingState}`);
    })
    .catch((err) => {
      console.log(err);
      console.log(`current state: ${loadingState}`);
    });