// "text"というidを持つHTML要素を取得し、定数に代入する
const h2Text = document.getElementById('text');

// idが"btn"のボタン要素を取得
const btnElement = document.getElementById("btn");
 
// HTML要素がクリックされたときにイベント処理を実行する
btnElement.addEventListener('click', () => {
  h2Text.textContent = 'ボタンをクリックしました！';
});
