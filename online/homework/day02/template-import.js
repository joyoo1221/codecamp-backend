import { createTemplate } from "./template-export-template.js";

const user = {
  name: "조이",
  email: "joy@email.com",
  number: "981101-2123456",
  phone: "010-1234-1234",
  favSite: "google.co.kr",
};

//가입 환영 템플릿 만들기
function getWelcomeTemplate(user) {
  //템플릿 생성
  createTemplate(user);
}

getWelcomeTemplate(user);
