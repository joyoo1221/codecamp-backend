/**
 * @swagger
 * /starbucks:
 *      get:
 *          tags: [Starbucks]
 *          summary: 커피목록 조회 API
 *          responses:
 *              200:
 *                  description: success
 *                  content:
 *                      applicstion/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  properties:
 *                                      name:
 *                                          type: string
 *                                          example: 아메리카노
 *                                      kcal:
 *                                          type: int
 *                                          example: 10
 *
 */
