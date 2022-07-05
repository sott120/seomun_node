Kakao.init('df117fdcfa786c5e28a5629fb8c82776');
Kakao.isInitialized();

function kakaoLogin(){
  Kakao.Auth.login({
    success: function(response){
      Kakao.API.request({
        url:'/v2/user/me',
        success:function(response){
          // console.log(response);
          document.getElementById('user').innerText = 
          response.kakao_account.profile.nickname; //로그인 성공하면 유저이름 넣어주기
          document.getElementById('login').style.display = 'none';
          alert(response.kakao_account.profile.nickname + '님 로그인 되었습니다.');
        }
      })
    }
  })
};

function kakaoLogout(){

};


// function fadeOut(el){
//     el.style.opacity = 1;
  
//     (function fade() {
//       if ((el.style.opacity -= .1) < 0) {
//         el.style.display = "none";
//       } else {
//         requestAnimationFrame(fade);
//       }
//     })();
//   };
  
//   function fadeIn(el, display){
//     el.style.opacity = 0;
//     el.style.display = display || "block";
  
//     (function fade() {
//       var val = parseFloat(el.style.opacity);
//       if (!((val += .1) > 1)) {
//         el.style.opacity = val;
//         requestAnimationFrame(fade);
//       }
//     })();
//   };


// let count=1;
// let imgchange=document.querySelector('#mainBnr')
// // setInterval(() => console.log(new Date()), 2000);
// setInterval(function mainBnr(){

//     imgchange.style.backgroundImage= "url(../img/index/mainBnr_img"+ count +".jpg)"
//     count++;
//     if(count>=3){count=1}
// },3000)