console.log("안녕~~~~");

import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

function createTokenOfPhone(myphone) {
  //1. 휴대폰 번호 자릿수 맞는지 확인
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    //2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();
    //3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
  }
}

createTokenOfPhone("01012345678");
