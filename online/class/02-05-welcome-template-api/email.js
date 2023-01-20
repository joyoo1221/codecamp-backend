import { getToday } from "./utils.js";

//1. 이메일이 정상인지 확인(1. 존재여부, 2. "@"포함여부)
export function checkValidationEmail(email) {
  if (email === undefined) {
    //if (email === null) {
    //1. 존재여부
    console.log("메일이 존재하지 않습니다.");
    return false;
  } else if (!email.includes("@")) {
    //} else if (email.search("@") === -1) {
    //2. "@"포함여부
    console.log("올바른 메일 형식이 아닙니다.");
    return false;
  } else {
    return true;
  }
}

//2. 가입환영 템플릿 만들기
export function getWelcomeTemplate({ name, age, school, email }) {
  const mytemplate = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!</h1>
            <hr/>
            <div>이름: ${name}</div>
            <div>나이: ${age}</div>
            <div>학교: ${school}</div>
            <div>가입일: ${getToday()}</div>
        </body>
    </html>
    `;
  return mytemplate;
}

//3. 이메일에 가입환영 템플릿 전송하기
export function sendTemplateToEmail(email, mytemplate) {
  console.log(email + "에 가입 메시지 " + mytemplate + "를 전송합니다.");
}
