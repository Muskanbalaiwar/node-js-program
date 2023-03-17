const http=require('http');
const server =http.createServer((req,res)=>{
  console.log(`muskan gupta ${req}`);

});

server.listen(3001)

console.log('Muskan gupta')