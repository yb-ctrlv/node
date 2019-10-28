const express = require('express')



const app = express();

// 모든 요청 메소드에 대응
app.all('/', (req, res, next) => {
    console.log('[All]');
    next(); // 후속 핸들러에게 컨트롤을 패스한다.
  });
  
  app.get('/', (req, res, next) => {
    console.log('[GET 1] next 함수에 의해 후속 핸들러에게 response가 전달된다.');
    next();
  }, (req, res, next) => {
    console.log('[GET 2] next 함수에 의해 후속 핸들러에게 response가 전달된다.');
    next();
  }, (req, res) => res.send('Hello from GET /'));
  
  app.post('/', (req, res, next) => {
    console.log('[POST 1] next 함수에 의해 후속 핸들러에게 response가 전달된다.');
    next();
  }, (req, res, next) => {
    console.log('[POST 2] next 함수에 의해 후속 핸들러에게 response가 전달된다.');
    next();
  }, (req, res) => res.send('Hello from POST /')).listen(3030, ()=> console.log('server on 3030'));