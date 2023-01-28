//현재 날짜와 시간을 출력
function getToday() {
  const date = new Date();

  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");
  const hh = date.getHours();
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = date.getSeconds();

  const today = `오늘은 ${YYYY}년 ${MM}월 ${DD}일 ${hh}:${mm}:${ss}입니다.`;
  console.log(today);

  return today;
}

getToday();
