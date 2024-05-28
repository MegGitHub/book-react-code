// buttonタグの生成
const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

// エリア1のdivタグを取得
const divEl = document.querySelector(".container");

divEl.appendChild(buttonEl);