//{ name, age, school, createdAt } -> 구조분해할당!
function getWelcomeTemplate({ name, age, school, createdAt }) {
  //const { name, age, school, createdAt } = { name, age, school, createdAt }

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
//인자를 하나 빼먹는 등의 실수를 방지하기 위해 객체로 만들어주기
const name = "영희";
const age = 9;
const school = "다람쥐초등학교";
const createdAt = "2023-01-15";

//shorthand property를 활용해서 새로운 객체(name, age, school, createdAt)를 만들어서 넣음
getWelcomeTemplate({
  //원래 name: name 인데 생략가능. 왜? "key(name)와 value(name)값이 같으니까!" -> '쇼트 핸드 프로퍼티(shorthand property)'라고 한다.
  name,
  age,
  school,
  createdAt,
});
