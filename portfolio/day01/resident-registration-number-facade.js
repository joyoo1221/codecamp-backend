//14자리가 입력됐는지 확인(-포함)
export function checkVal(number) {
  if (number.length > 14) {
    console.log("에러 발생! 형식이 올바르지 않습니다.");
    return false;
  } else {
    return true;
  }
}

export function checkLengthAndReplceNumber(number) {
  const first = number.substr(0, 6);
  const second = number.substr(7);

  //앞자리=6, 뒷자리=7 인지 확인
  if (number.length !== 14 && (first.length !== 6 || second.length !== 7)) {
    console.log("에러 발생! 개수를 제대로 입력해주세요.");
    return false;
  } else {
    //뒷자리 두 번째 숫자부터 *로 치환
    const result = String(second.charAt(0)).padEnd(7, "*");
    console.log(first + "-" + result);
  }
}
