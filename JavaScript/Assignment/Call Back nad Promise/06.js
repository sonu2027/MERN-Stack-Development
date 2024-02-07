// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
    async function sonu(){
        res= await res.json()
    }
    sonu()
    console.log(res);
}).catch((err)=>{
    console.log(err);
})