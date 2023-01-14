console.log("안녕~~~~");

function getToken(a) {
  const result = String(Math.floor(Math.random() * 10 ** a)).padStart(a, "0");
  console.log(result);
}

getToken(5);
