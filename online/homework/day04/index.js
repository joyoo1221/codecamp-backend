import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const port = 3000;
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

//1. 회원 목록 조회 API
app.get("/users", (req, res) => {
  //회원 데이터 하드코딩
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1111-1111",
      personal: "230124-1111111",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "영희",
      phone: "010-2222-2222",
      personal: "230124-2222222",
      prefer: "https://google.co.kr",
    },
    {
      email: "ccc@gmail.com",
      name: "훈이",
      phone: "010-3333-3333",
      personal: "230124-1111111",
      prefer: "https://daum.net",
    },
    {
      email: "ddd@gmail.com",
      name: "짱구",
      phone: "010-4444-4444",
      personal: "230124-1111111",
      prefer: "https://nate.com",
    },
    {
      email: "eee@gmail.com",
      name: "맹구",
      phone: "010-5555-5555",
      personal: "230124-1111111",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

//2. 커피목록 조회 API
app.get("/starbucks", (req, res) => {
  //커피 데이터 하드코딩
  const result = [
    { name: "아메리카노", kcal: 10 },
    { name: "콜드브루", kcal: 5 },
    { name: "바닐라크림콜드브루", kcal: 125 },
    { name: "카페라떼", kcal: 110 },
    { name: "사케라또아포가토", kcal: 290 },
    { name: "딸기딜라이트요거트블렌디드", kcal: 370 },
    { name: "바닐라플랫화이트", kcal: 145 },
    { name: "에스프레소콘파나", kcal: 30 },
    { name: "제주사려니쑥길라떼", kcal: 435 },
    { name: "콜드브루플로트", kcal: 225 },
  ];

  res.send(result);
});

app.listen(port, () => {
  console.log(`'${port}' port is in use...`);
});
