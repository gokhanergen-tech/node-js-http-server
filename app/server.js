const http=require("http")
function startServer(port){
    http.createServer((request,respond)=>{
          respond.writeHead(200,{"Content-Type":"application/json;charset=utf8;"});
          respond.write(JSON.stringify({
              name:"Gökhan",
              surname:"ERGEN"
          }));
          respond.end();
    }).listen(port)
}

module.exports={
    start:startServer
}
