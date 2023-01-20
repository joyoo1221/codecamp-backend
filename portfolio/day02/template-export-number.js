//주민번호 * 치환
export function checkNumber(number) {
  if (number === undefined || !number.includes("-")) {
    console.log("주민번호가 올바르지 않습니다.");
    return false;
  } else {
    const first = number.substr(0, 6);
    const second = number.substr(7);
    const secondStar = String(second.charAt(0)).padEnd(7, "*");

    const result = `${first}-${secondStar}`;

    return result;
  }
}
