// const exec = require("child_process").exec

function start(response){
    console.log("Request handler 'start' was called")

    // exec("ls -lah", (error, stdout, stderr){
    //     response.writeHead(200,{"Content-Type":"text/plain"})
    //     response.write(stdout)
    //     response.end()
    // })
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
    // return "Hello Start";
}

function uplaod(res,postData){
    console.log("Request handler 'upload' was called")
    res.writeHead(200,{"ContentType":"text/plain"})
    res.write("You've sent : " +  postData)
    res.end()
}

exports.start = start;
exports.uplaod = uplaod;