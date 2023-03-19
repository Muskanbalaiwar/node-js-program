const fs=require('fs')

const requestHandler =(req,res)=>{
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
      

};
// module.exports=requestHandler;

// module.exports ={
//   handler:requestHandler,
// text:'some text'
// }

// module.exports.handler=requestHandler;
// module.exports.text='some text';

exports.handler=requestHandler;
exports.text='some text';