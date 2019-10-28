const http = require('http');
const url = require('url');

function start(route, handle){ 
    http.createServer((req,res)=>{
    let postData = "";
    let pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + "received");


    req.setEncoding("utf-8")

    req.addListener("data",(postDataChunk)=>{
        postData += postDataChunk;
        console.log("Received POST data chunk '"+postDataChunk+"'.")
    })

    req.on("end", ()=>{
        route(handle,pathname,res,postData)
    })
    // route(handle, pathname, res);
    // let content = route(handle,pathname);
    // res.writeHead(200,{"Content-Type":"text/plain"});
    // res.write(content);
    // res.end();
}).listen(3030);
console.log("SERVER has Started.");
}

exports.start = start;
