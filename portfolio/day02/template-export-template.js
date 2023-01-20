import { checkNumber } from "./template-export-number.js";

//템플릿 생성
export function createTemplate({ name, email, number, phone, favSite }) {
  const template = `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다!</h1>
            <hr/>
            <div>이메일: ${email}</div>
            <div>주민번호: ${checkNumber(number)}</div>
            <div>휴대폰 번호: ${phone}</div>
            <div>내가 좋아하는 사이트: ${favSite}</div>
        </body>
    </html>
    `;

  console.log(template);
}
