// Promise Example

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));

//q1. read 3 files f1.txt,f2.txt,f3.txt serially using promises

// 2nd way to overcome callback hell is to use promises 

// const fs = require("fs");

// let f1readPromise = fs.promises.readFile("f1.txt");

// function readf2file(f1kadata) {
//   console.log(f1kadata + "");
//   let f2readPromise = fs.promises.readFile("f2.txt");
//   return f2readPromise;
// }

// function readf3File(f2kadata) {
//   console.log(f2kadata + "");
//   let f3readPromise = fs.promises.readFile("f3.txt");
//   return f3readPromise;
// }

// function alldone(f3kadata) {
//   console.log(f3kadata + "");
//   console.log("read all files serially ");
// }

// f1readPromise
//   .then(readf2file)
//   .then(readf3File)
//   .then(alldone)
//   .catch(function (err) {
//       console.log(err)
//   });


//q2. read 3 files f1.txt,f2.txt,f3.txt paralelly using promises

// let f1p = fs.promises.readFile("f1.txt");
// let f2p = fs.promises.readFile("f2.txt");
// let f3p = fs.promises.readFile("f3.txt");

// f1p.then(function cb(data) {
//   console.log(data + "");
// });

// f2p.then(cb);
// f3p.then(cb);

// function cb(data) {
//   console.log(data + "");
// }


// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);

// The output is: 1.

// The second call to resolve is ignored, because only the first call of reject/resolve is taken into account. Further calls are ignored.



// //thenable
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve); // function() { native code }
//     // resolve with this.num*2 after the 1 second
//     setTimeout(() => resolve(this.num * 2), 1000); // (**)
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result); // (*)
//   })
//   .then(alert); // shows 2 after 1000ms



// Example of promises in network request : fetch ,makes a network request to the url and returns a promise. 

// fetch('/article/promise-chaining/user.json')
//   // .then below runs when the remote server responds
//   .then(function(response) {
//     // response.text() returns a new promise that resolves with the full response text
//     // when it loads
//     return response.text();
//   })
//   .then(function(text) {
//     // ...and here's the content of the remote file
//     alert(text); // {"name": "iliakan", "isAdmin": true}
//   })

// we can make  request to GitHub, load the user profile and show the avatar:

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise(function(resolve, reject) { // (*)
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser); // (**)
//     }, 3000);
//   }))
//   // triggers after 3 seconds
//   .then(githubUser => alert(`Finished showing ${githubUser.name}`));

// split code into reusable functions

function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
  return loadJson(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
  // ...