/**
 * @swagger
 * /users:
 *      get:
 *          tags: [Users]
 *          summary: 회원 목록 조회 API
 *          parameters:
 *              - in: query
 *                name: email
 *                type: string
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      email:
 *                                          type: string
 *                                          example: qqq@naver.com
 *                                      name:
 *                                          type: string
 *                                          example: 짱아
 *                                      phone:
 *                                          type: string
 *                                          example: 010-9876-9876
 *                                      personal:
 *                                          type: string
 *                                          example: 230124-2222222
 *                                      prefer:
 *                                          type: string
 *                                          example: https://naver.com
 */
