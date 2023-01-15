function getWelcomeTemplate(name, age, school, createdAt) {
  //``으로 내용을 감싸는 걸 템플릿 리터럴이라 한다.
  const result = `
   <html>
    <body>
        <h1>${name}님 가입을 환영합니다!</h1>
        <hr/>
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: ${createdAt}</div>
    </body>
   </html 
  `;
  console.log(result);
}

//frontend에서 받아온 값이 있다고 가정
const myname = "조이";
const myage = 12;
const myschool = "토끼초등학교";
const mycreatedAt = "2023-01-14";

getWelcomeTemplate(myname, myage, myschool, mycreatedAt);
