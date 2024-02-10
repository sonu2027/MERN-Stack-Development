// syntax 1

function promiseOne() {
  // Create promise
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Asyns task 1 is completed");

      // We have to called resolve() to say that promise is completed
      resolve();
    }, 2000);
  });

  // consumed promise
  promise.then(function () {
    console.log("Promises 1 consumed");
  });

  // This will print first
  console.log("Hi");
}
// promiseOne()

// Syntax 2
function promiseTwo() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Asyns task 2 is completed");
      resolve();
    }, 4000);
  }).then(() => {
    console.log("Promises 2 consumed");
  });
  // This will print first
  console.log("Hi");
}
// promiseTwo()

// return in promise
function PromiseThree() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Asyns task 3 is completed");
      resolve({ username: "sonu", email: "sonu@example.com" });
    }, 2000);
  });

  promise.then((userData) => {
    console.log("Promises 3 consumed");
    console.log(userData);
  });
}

// reject in promise
function promiseFour() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "sonu", email: "sonu@example.com" });
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });

  promise
    .then((userData) => {
      console.log(userData);
      return userData.username;
    })
    .then((userName) => {
      console.log(userName);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("task completed");
    });
}
// promiseFour();

// asyns await method

function promiseFive() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        resolve({ username: "sonu", email: "sonu@example.com" });
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });

  async function promiseConsume() {
    try {
      const response = await promise;
      console.log("response is: ", response);
    } catch (error) {
      console.log("error is: ", error);
    }
  }

  promiseConsume();
  console.log("sonu");
}
// promiseFive();

// api call using async-await with fetch()
async function getResult() {
  try {
    const response = await fetch(
      "https://api.github.com/search/users?q=type:user"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getResult()
console.log("hi");

// api call using then(), catch() and finally with fetch()
function promiseSeven(){
  fetch("https://api.github.com/search/users?q=type:user")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task completed");
  });
  console.log("hi");
}


/*
fetch is a special type of async function which go first in priority queue before setTimeOut and setinterval 
*/