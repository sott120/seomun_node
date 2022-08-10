# 서문시장 야시장 사이트 리디자인

<br/>

## 사이트 기획
> __클론코딩을 제외하고 처음으로 제작한 사이트__ <br/>
다양한 동적요소보다는 반응형 디자인과 html, css로 ui를 잘 구성하는것에 초점을 맞췄습니다. <br/>
font-size에 'rem' 단위를 처음 사용해보았는데 반응형을 제작할 때 편리하게 작업할 수 있었습니다. <br/>
Node.js의 express모듈을 사용하여 서버를 열고, ejs 파일 형식으로 페이지를 구성하였으며 MySQL을 사용해 sql구문을 사용해볼 수 있었고, 이를 종합하여 게시판 기능을 구현했습니다. <br/>
전부 다 처음 해보는 것들이어서 모든것을 이해하지는 못했지만 앞으로 더 공부할 예정입니다.

<br/>

-----

<br/>

## 개발환경/ 사용스택

![서문사용스택](https://user-images.githubusercontent.com/69718601/183320598-58aae584-3b06-4f92-bdff-666da4beecc8.jpg)

### Front
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Back
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Data base
![MySQL](https://img.shields.io/badge/mysql-%23316192.svg?style=for-the-badge&logo=mysql&logoColor=white)

### Deploy
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

<br/>

------

<br/>

## 구현한 기능

+ expressLayouts모듈을 사용해서 모든 페이지에 헤더와 푸터를 공통 사용

+ 게시판
  + 게시판의 기본 CRUD 구현
  + 전체 게시글 카운트해서 화면에 출력
  + 게시글 상세보기 페이지로 넘어갈 때마다 조회수 증가 쿼리 적용
  + sql구문으로 인덱스번호 생성
    + primary key를 인덱스번호로 사용하면 중간에 있는 row를 삭제해도 숫자가 바뀌지 않는 문제점 발생
    + sql 구문 안에 서브쿼리를 사용하여 rownum이라는 변수를 만들고, row가 카운트 될 때마다 1씩 증가시켜 새로운 인덱스 번호 생성, 화면에 출력
  + row의 id를 1씩 증감시켜 이전글, 다음글로 넘어가는 버튼 구현
    + 헤로쿠 배포 후 id가 100단위로 증가하는 문제 발생,
    + 100씩 증감시키는 것으로 수정
