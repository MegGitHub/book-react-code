// buttonタグの生成
const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";

// エリア1のdivタグを取得
const divEl = document.querySelector(".container");

divEl.appendChild(buttonEl);


// h1タグの取得
const h1El = document.getElementById("title");

// bodyタグの取得
const bodyEl = document.querySelector("body");

// bodyタグ配下から削除
bodyEl.removeChild(h1El);

// bodyタグ配下から子要素を全て削除
bodyEl.textContent = null;