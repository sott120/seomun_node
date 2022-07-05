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