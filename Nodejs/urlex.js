const http=require("http");
const url=require("url");

//url.parse()

http.createServer((request,response) => {
    console.log(request.url);

    const urlob=url.parse(request.url);
    console.log(urlob)
})
.listen(8082);