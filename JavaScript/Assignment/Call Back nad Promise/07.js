// 7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

let res1;
let res2;
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    res1 = res.json();
    //   console.log(res1);
  })
  .catch((err) => {
    console.log(err);
  });

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    res2 = res.json();
    //   console.log(res2);
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
    const obj={
        todo:res1,
        post:res2
    }
  console.log(obj);
}, 5000);
