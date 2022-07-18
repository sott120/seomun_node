//메인배너 페이드인아웃
function mainBnrImg() {
    const mainImg = document.querySelectorAll('.main_img');
    const slideNN = document.querySelectorAll('.slide_nav_num');
    const slideBar = document.querySelector('.slide_nav_bar');
    setInterval(function () {
        if (mainImg[0].classList.contains('on')) {
            mainImg[0].classList.remove('on');
            mainImg[1].classList.add('on');
            slideNN[1].classList.add('on');
            slideBar.classList.add('on');
        } else {
            mainImg[0].classList.add('on');
            mainImg[1].classList.remove('on');
            slideNN[1].classList.remove('on');
            slideBar.classList.remove('on');
        }
    }, 5000);
}

mainBnrImg();

//메인 공지사항 탭메뉴
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('main_noti_wrap');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    tabLinks = document.getElementsByClassName('main_noti_tab');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'flex';
    evt.currentTarget.className += ' active';
}
