// "text"というidを持つHTML要素を取得し、定数に代入する
const h2Text = document.getElementById('text');

// idが"btn"のボタン要素を取得
const btnElement = document.getElementById("btn");
 
// HTML要素がクリックされたときにイベント処理を実行する
btnElement.addEventListener('click', () => {
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
    h2Text.textContent = 'ボタンをクリックしました！';
  }, 2000);
});
