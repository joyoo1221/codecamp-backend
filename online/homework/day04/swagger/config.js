export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger를 활용한 API-Docs 생성",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"],
};
