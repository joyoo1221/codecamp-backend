import {
  checkVal,
  checkLengthAndReplceNumber,
} from "./resident-registration-number-facade.js";

function customRegistrationNumber(number) {
  //14자리가 입력됐는지 확인(-포함)
  const isValid = checkVal(number);
  if (isValid) {
    //앞자리=6, 뒷자리=7 인지 확인, 확인 이후 뒷자리 두 번째 숫자부터 *로 치환
    const isLength = checkLengthAndReplceNumber(number);
  }
}

customRegistrationNumber("210510-1010101");
// customRegistrationNumber("210510-1010101010101");
// customRegistrationNumber("2105101010101");
