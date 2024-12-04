// Task 01:
// Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

// function timer(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

// async function iterateWithAsyncAwait(arr) {
//   for (var elt of arr) {
//     console.log(elt);
//     await timer(1000);
//   }
// }

// iterateWithAsyncAwait(["banana", "orange", "apple"]);

//________________________________________________________________________________________
// Task 02:
// Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

// function fetchData(url) {
//   return new Promise(resolve=> setTimeout(()=>resolve(`success to fetch data from ${url}`), 1000))
// }

// async function awaitCall(url) {
//   const data = await fetchData(url);
//   console.log(data)
// }

// awaitCall("http://example/api")

//________________________________________________________________________________________
// Task 03:
// Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     if (url)
//       setTimeout(() => resolve(`success to fetch data from ${url}`), 1000);
//     else {
//       reject("Fail to access data!!!");
//     }
//   });
// }
// async function awaitCall(url) {
//   try {
//     const data = await fetchData(url);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// // awaitCall("http://example/api")
// awaitCall();
//________________________________________________________________________________________
// Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

// function oneFn() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(console.log("Msg from One")), 1000)
//   );
// }
// function towFn() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(console.log("Msg from Tow")), 1000)
//   );
// }
// function threeFn() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(console.log("Msg from Three")), 1000)
//   );
// }
// async function chainedAsyncFunctions() {
//   await oneFn();
//   await towFn();
//   await threeFn();
// }
// chainedAsyncFunctions();

//________________________________________________________________________________________
// Task 04:
// Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

// function apiCall1() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("successfully fetching data1..."), 3000)
//   );
// }
// function apiCall2() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("successfully fetching data2..."), 1000)
//   );
// }

// async function concurrentRequests() {
//   const [data1, data2] = await Promise.all([apiCall1(), apiCall2()]);
//   console.log(data1, data2);
// }

// concurrentRequests();
//________________________________________________________________________________________
// Task 05:
// Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.

// function fetchData(url) {
//   return new Promise((resolve) =>
//     setTimeout(
//       () => {
//         resolve(`fetching data from ${url}`);
//       },

//       2000
//     )
//   );
// }

// async function parallelCalls(urls) {
//     const tab = await Promise.all(urls.map((url) => (fetchData(url))));
//     tab.forEach(elt=>console.log(elt))

// }

// parallelCalls(["api1", "api2", "api3", "api4"]);
