const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

/* 
Basic premise of this project for me is to improve css and learn to work with api

Here:
Every time getJoke is invoked, the class fade from present item get removed and url is fetched from api and class fade is added
to it, hence it gets displayed.
*/




let getJoke =() =>{
   jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
       jokeContainer.textContent =`${item.joke}`;
       jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click",getJoke);
getJoke();