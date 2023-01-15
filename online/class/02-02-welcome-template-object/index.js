function getWelcomeTemplate(user) {
  //``으로 내용을 감싸는 걸 템플릿 리터럴이라 한다.
  const result = `
   <html>
    <body>
        <h1>${user.name}님 가입을 환영합니다!</h1>
        <hr/>
        <div>이름: ${user.name}</div>
        <div>나이: ${user.age}</div>
        <div>학교: ${user.school}</div>
        <div>가입일: ${user.createdAt}</div>
    </body>
   </html 
  `;
  console.log(result);
}

//frontend에서 받아온 값이 있다고 가정
//인자를 하나 빼먹는 등의 실수를 방지하기 위해 객체로 만들어주기
const myuser = {
  myname: "조이",
  myage: 12, 
  myschool: "토끼초등학교",
  mycreatedAt: "2023-01-14",
};

getWelcomeTemplate(myuser);
