
const http=require('http');
const server =http.createServer((req,res)=>{
  const url=req.url;
 if(url==='/home'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Welcome home');
  console.log('home')
  res.end();
 }
 if(url==='/about'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Welcome to About Us page');
  res.end();
 }
 if(url==='/node'){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(' Welcome to my Node Js project');
  res.end();
 }

});

server.listen(3001)

console.log('Muskan gupta')