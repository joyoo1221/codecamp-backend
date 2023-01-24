import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

const app = express();
const port = 3000; //localhost(=컴퓨터주소, 127.0.0.1):3000(=port)/(=endpoint)

app.use(express.json()); //express에서는 json 형태를 처리하고 있지 않기 때문에 추가

//게시물 조회 api
app.get("/boards", (req, res) => {
  //1. 데이터를 조회하는 로직 -> db에 접속해서 데이터 꺼내오기
  //3개의 데이터를 꺼내왔다고 가정
  const result = [
    { number: 1, writer: "writer1", title: "title1", contents: "contents1" },
    { number: 2, writer: "writer2", title: "title2", contents: "contents2" },
    { number: 3, writer: "writer3", title: "title3", contents: "contents3" },
  ];
  //2. 꺼내온 결과 응답 주기
  res.send(result);
});

//게시물 등록 api
app.post("/boards", (req, res) => {
  console.log(req.body);
  //1. 데이터를 등록하는 로직 -> db에 접속해서 데이터 저장하기
  //2. 저장 결과 응답 주기
  res.send("게시물 등록에 성공하였습니다.");
});

//핸드폰 번호 입력하고 토큰 받기
app.post("/tokens/phone", (req, res) => {
  console.log(req.body.phone);
  const myphone = req.body.phone;

  //1. 휴대폰 번호 자릿수 맞는지 확인
  const isValid = checkValidationPhone(myphone);
  if (isValid) {
    //2. 핸드폰 토큰 6자리 만들기
    const mytoken = getToken();
    //3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone, mytoken);
    res.send("인증되었습니다.");
  }
});

//api 서버를 실행(3000), listen:접속을 기다림, 24시간 동안 켜져있다
app.listen(port, () => {
  console.log(`exmple app listening on port ${port}`);
});
