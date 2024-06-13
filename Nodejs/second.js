const http=require("http");

const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write("<h1> wow is response from first server </h1>");
    resp.write("<h2>nice work</h2>");
    resp.write("<button>Click me</button>");
    resp.end("Ok byby");
});
server.listen(9898);