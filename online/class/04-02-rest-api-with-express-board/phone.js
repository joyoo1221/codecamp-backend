export function checkValidationPhone(myphone) {
  //1. 휴대폰 번호 자릿수 맞는지 확인
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("에러발생! 핸드폰 번호를 제대로 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  //2. 핸드폰 토큰 6자리 만들기
  const mycount = 6; //임시
  if (mycount === undefined) {
    console.log("에러발생! 개수를 제대로 입력해주세요.");
    return;
  } else if (mycount <= 0) {
    console.log("에러발생! 개수가 너무 적습니다.");
    return;
  } else if (mycount > 10) {
    console.log("에러발생! 개수가 너무 많습니다!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** mycount)).padStart(
    mycount,
    "0"
  );
  return result;
  //console.log(result);
}

export function sendTokenToSMS(myphone, mytoken) {
  //3. 핸드폰 번호에 토큰 전송하기
  console.log(myphone + " 번호로 인증번호 " + mytoken + "를 전송합니다.");
}
