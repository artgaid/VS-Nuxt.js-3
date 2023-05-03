export default defineEventHandler((event) => {
  // if --- http://localhost:3000/api/helloWorld?hello=world
  return {
    message: getQuery(event)
  }
  // return --- "message": {
  //     "hello": "world"
  //   }
})
