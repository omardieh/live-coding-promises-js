// function func1(callback) {
//   console.log("Hi");
//   callback();
// }

// function func2() {
//   console.log("Goodbye!");
// }

// func1(func2);

// const directions = [
//   "Starting point: Ironhack Miami",
//   "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
//   "➔ Turn right onto S Miami Ave",
//   "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
// ];

// function getDirections(step) {
//   return new Promise((resolve, reject) => {
//     resolve();
//     console.log(directions[step]);
//   });
// }

// getDirections(0, () => {
//     getDirections(1, () => {
//       getDirections(2, () => {
//         getDirections(3, () => {

//           console.log("You arrived at your destination!");
//           // getDirections(4, () => {}, (err) => console.log(err) ) ;
//         }, (err) => console.log(err));
//       }, (err) => console.log(err));
//     }, (err) => console.log(err));
//   }, (err) => console.log(err));

// const handleAsync = (isLoggedIn) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isLoggedIn) {
//         resolve("pass");
//       } else {
//         reject("fail");
//       }
//     }, 1000);
//   });
// };

// // pending state :
// console.log(handleAsync());

// // Fulfilled :
// handleAsync(true).then((resp) => console.log(resp));

// // Rejected :
// handleAsync(false).catch((error) => console.log(error));

// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Ironhack");
//   }, 2000);
// });

// pr1.then((val) => console.log("Resolved with: ", val));

// const pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Rejected!"); // <== This value will be passed to catch()
//   }, 2000);
// });

// pr2
//   .then((value) => console.log("Resolved with: ", value))
//   .catch((err) => console.log("catch() -> ", err));

// const pr3 = new Promise((resolve, reject) => {
//   throw new Error("Hello this is custom error message");
// });

// pr3
//   .then((value) => console.log("Resolved with: ", value))
//   .catch((err) => console.log("catch() -> ", err));

// const pr4 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Ironhack"), 2000);
// });

// pr4
//   .then(() => {
//     console.log("1. then()");
//   })
//   .then(() => {
//     console.log("2. then()");
//     // throw new Error("Something went wrong"); // <= Throw an Error
//   })
//   .then(() => {
//     // <= This block is skipped
//     console.log("3. then()");
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

// pr4().catch((err) => console.log(err));
// console.log();
// console.error();
// throw new Error("Something went wrong");

// const pr5 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("A"), 2000);
// });

// pr5
//   .then((value1) => {
//     console.log("value1:", value1);
//     return "B" + value1;
//   })
//   .then((value2) => {
//     console.log(value2);
//     return "C" + value2;
//   })
//   .then((value3) => {
//     console.log(value3);
//   });

// const pr7 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("A"), 2000);
// });

// pr7
//   .then((value1) => {
//     console.log("1. then(): ", value1);
//     throw new Error("FIRST ERROR");
//   })
//   .catch((err) => {
//     console.error("1. catch(): ", err);
//     return "Hello from catch";
//   })
//   .then((value2) => {
//     console.log("2. then(): ", value2);
//     throw new Error("SECOND ERROR");
//   })
//   .catch((err) => {
//     console.error("2. catch(): ", err);
//   });

// const handleAsync = (isLoggedIn) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isLoggedIn) {
//         resolve("pass");
//       } else {
//         reject("fail");
//       }
//     }, 1000);
//   });
// };

// let loading = true;
// handleAsync(false)
//   .then((resp) => console.log(resp))
//   .catch((error) => console.error(error))
//   .finally(() => (loading = false));

// if (loading) {
//   return `<div> loading... </div>`;
// } else {
//   return "result";
// }

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("foo"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1337), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ name: "Bob" }), 4000);
// });

// Promise.all([p1, p2, p3]).then((responses) => console.log("values", responses));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("foo"), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1337), 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Something went wrong"), 4000); // <= Reject the promise
// });

// Promise.all([p1, p2, p3])
//   .then((values) => console.log("values", values))
//   .catch((err) => console.log("catch()", err));

// // sync
// const syncFunc = () => {
//   return "Hello World Sync";
// };

// // ES6 : async
// const asyncFuncES6 = async () => {
//   return "Hello World Async";
// };

// // ES5 : async
// async function asyncFuncES5() {
//   return "Hello World Async";
// }

// console.log(syncFunc());
// asyncFuncES6().then((resp) => console.log(resp));
// asyncFuncES5().then((resp) => console.log(resp));

// const directions = [
//   "Starting point: Ironhack Paris",
//   "← Head northwest on Bd Voltaire toward Rue Léon Frot",
//   "← Turn left onto Rue Chanzy",
//   "* Café Titon, 34 Rue Titon, 75011 Paris, France",
// ];

// function obtainDirections(step) {
//   return new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     console.log(directions[step]);
//     if (!directions[step]) reject("Instructions not found.");
//     else resolve();
//     // }, 2000);
//   });
// }

// async function displayDirections() {
//     try {
//         //whatever logic you have
//         await obtainDirections(0);
//         await obtainDirections(1);
//         await obtainDirections(2);
//         await obtainDirections(3);
//         await obtainDirections(4);
//       } catch (error) {
//         console.error(error);
//       }
// }
// displayDirections();

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("You arrived at your destination!"))
//   .catch((err) => console.log(err));

// let time = 0;

// setInterval(() => {
//   time++;
//   console.log(time);
// }, 1000);

// const firstExample = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("first");
//     }, 1000);
//   });
// };

// const secondExample = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("second");
//     }, 1000);
//   });
// };

// sync : a + b
// async : go to the server, check the database if user exist
//
// firstExample().then((resp) => {
//   console.log(resp);
//   secondExample().then((resp) => console.log(resp));
// });

// const callExamples = async () => {
//   try {
//     const val1 = await firstExample();
//     console.log(val1);
//     const val2 = await secondExample();
//     console.log(val2);
//   } catch (error) {}
// };

// callExamples();

// const apiURL = "https://api.spacexdata.com/v4/launches";
// const app = document.getElementById("root");

// const handleFetch = (url) => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((error) => console.error(error));
// };

// const displayPatches = async () => {
//   const resp = await fetch(apiURL);
//   const data = await resp.json();
//   data.splice(0, 10).forEach((element) => {
//     const src = element.links.patch.small;
//     const img = document.createElement("img");
//     img.src = src || "default image url";
//     app.appendChild(img);
//   });
// };
// displayPatches();

// fetch(apiURL)
//   .then((resp) => resp.json())
//   .then((data) => {
//     data.splice(0, 10).forEach((element) => {
//       const src = element.links.patch.small;
//       const img = document.createElement("img");
//       img.src = src || "default image url";
//       app.appendChild(img);
//     });
//   });

// fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Parsed response: ", data);
//   })
//   .catch((err) => console.log(err));

// const greetUser = (string) => string.toUpperCase();
// console.log(greetUser("Hello"));
