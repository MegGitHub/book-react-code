// getElementByIdを使ってtitle要素を取得
const title = document.getElementById("title");
console.log(title);
// <h1 id="title">Hello World!</h1>

// querySelectorを使ってtitle要素を取得
const title2 = document.querySelector("#title");
console.log(title2);
// <h1 id="title">Hello World!</h1>

// getElementsByClassNameを使ってcontainer要素を取得
const container = document.getElementsByClassName("container");
console.log(container);
// <div class="container">
//     <p>エリア1です</p>
// </div>
// <div class="container">
//     <p>エリア2です</p>
// </div>

// querySelectorを使ってcontainer要素を取得
const container2 = document.querySelector(".container");
console.log(container2);
// <div class="container">
//     <p>エリア1です</p>
// </div>

// querySelectorAllを使ってcontainer要素を取得
const container3 = document.querySelectorAll(".container");
console.log(container3);
// <div class="container">
//     <p>エリア1です</p>
// </div>
// <div class="container">
//     <p>エリア2です</p>
// </div>