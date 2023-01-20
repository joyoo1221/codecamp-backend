import express from "express";

const app = express();
const port = 3000; //localhost(=컴퓨터주소, 127.0.0.1):3000(=port)/(=endpoint)

//등록
app.get("/", (req, res) => {
  res.send("hello world!");
});

//api 서버를 실행(3000), listen:접속을 기다림, 24시간 동안 켜져있다
app.listen(port, () => {
  console.log(`exmple app listening on port ${port}`);
});
