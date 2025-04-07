/* globals $ */

// 写真をフェードインさせる
$('.imgs_l').waypoint({ /* .imgs_l の写真を左からフェードイン */
  handler: function(direction){
    if(direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  
  offset: '60%',
});

$('.imgs_r').waypoint({ /* .imgs_r の写真を右からフェードイン */
  handler: function(direction) {
    if(direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  
  offset: '60%',
});

$('.imgs_up').waypoint({ /* .imgs_r の写真をしたからフェードイン */
  handler: function(direction) {
    if(direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  
  offset: '80%',
});

// フォームの入力値チェック
$('#contact_form').on('submit', function (e){
  var username = $('#username').val(); /* お名前 */
  var userkana = $('#userkana').val(); /* フリガナ*/
  var useradress = $('#useradress').val(); /* 郵便番号 */
  var prefecture = $('select[name="prefecture"]').val(); /* 都道府県 */
  var usercity = $('#usercity').val(); /* 市町村 */
  var telno = $('#tellnumber').val(); /* 電話番号 */
  var email = $('#emailadress').val(); /* メールアドレス */
  var userpass = $('#userpass').val(); /* パスワード */
  var radio = $('input[name="radiobutton"]:checked').val(); /* ラジオボタン */
  
  console.log(prefecture);
  
  var error_text = ''; /* エラーの説明が入る変数 */
  
  if(username.trim() === '') {
    error_text = 'お名前を入力してください';
  }else if(userkana.trim() === ''){
    error_text = 'フリガナを入力してください';
  }else if(!userkana.match(/^[ア-ヴ ]+$/)) {
    error_text = 'フリガナには全角のカタカナとスペースのみ入力してください';
  }else if(useradress.trim() === '') {
    error_text = '郵便番号を入力してください';
  }else if(!useradress.match(/^[0-9]{7}$/)) {
    error_text = '郵便番号は半角数字7桁を入力してください';
  }else if(prefecture === '') {
    error_text = '都道府県を選択してください';
  }else if(usercity.trim() === '') {
    error_text = '市町村を入力してください';
  }else if(!usercity.match(/^[^\x01-\x7E]*$/)) {
    error_text = '市町村は全角で入力してください';
  }else if(telno.trim() === '') {
    error_text = '電話番号を入力してください';
  }else if(!telno.match(/^0\d{9,10}$/)) {
    error_text = '電話番号を正しい書式で入力してください';
  }else if(email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  }else if(
    !email.match(
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  )
  {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }else if(userpass.trim==='') {
    error_text = 'パスワードを入力してください';
  }else if(!userpass.match(/\w{4,}/)) {
    error_text = 'パスワードは4文字以上の英数字で入力してください';
  }else if(radio === undefined ){
    error_text = 'お支払い方法を選択してください';
  }
  if(error_text !== ''){
    // エラーがあった場合はページ遷移を止め、エラー内容を表示する
    
    // ページ遷移を止める
    e.preventDefault();
    
    // エラー内容を表示する
    $('#form_has_error').text(error_text);
  }else {
    // エラーがない場合はエラー内容をクリアする（ページ遷移は自動で行われる）
    
    // 今回はサーバーにデータを送らないのでページ遷移を止める（本番では不要）
    e.preventDefault();
    
    // エラー内容をクリアする
    $('#form_has_error').text('');
  }
});

//キャンペーンボタンページ移動設定
$('.campaign_button').on('click',function() {
  console.log(location.href);
  location.href = 'index.html';
})

// ラジオボタンの選択設定
// $('.radio_parts').on('click',function(e){
//   var reset = document.getelementsbyname('radiobutton');
//   var title = $(e.target)
//     .parent()
//     .radio_parts;
    
//   //クリックされてないボタンのチェック外す  
//   reset.checked = false;
    
//   // クリックされたボタンをチェック
//   title.checked;

// }); 

// var remove = 0;

// function radioDeselection(already, numeric) {
//   if(remove == numeric) {
//     already.checked = false;
//     remove = 0;
//   } else {
//     remove = numeric;
//   }
// }

