
const http=require('http');
const fs=require('fs')
const server =http.createServer((req,res)=>{
  const url=req.url;
  const method=req.method;
  if(url==='/'){
    fs.readFile('message.txt',(err,data)=>{
      if(err){
      console.log(err)}
      
      
    
    console.log(`file data`)
    res.write('<html>')
    res.write('<head><title>Enter message</title></head>')
    res.write(`<body>${data}</body>  `)
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();})
  }
  if(url==='/message' && method==='POST'){
    const body=[]
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
     
     const parsedBody=Buffer.concat(body).toString();
     console.log(parsedBody)
     const msg=parsedBody.split('=')[1];
     fs.writeFileSync('message.txt',msg,(err)=>{
      if(err){
      console.log(err)}
     res.statusCode=302;
    res.setHeader('Location','/');
     res.end();});
    });
    
    
  }
  else{
    res.write('not working properly')
  }
 
});

server.listen(3001)

console.log('Muskan gupta')