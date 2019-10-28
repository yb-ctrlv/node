const http = require('http');// http 모듈 로딩

http.createServer((req,res)=>{ //create 메소드 사용 request 이벤트 발생할때마다 한번씩호출
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello World');
}).listen(3000); //포트번

console.log('Server running at http://localhost:3000/');