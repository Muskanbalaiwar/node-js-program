var post=[];

function deletePost(){
  return new Promise((resolve, reject) => {
      setTimeout( () => {
          if(post.length > 0){
              const poppedElement  = post.pop();
              resolve(poppedElement.title);
          } else {
              reject("ERROR: ARRAY IS EMPTY")
          }
      }, 1000)
  })
}


const postsAdd=async ()=>{

  const add1=new Promise((resolve,reject)=>{
    
      post.push({title: 'post1'})
   resolve();

  })
  const add2=new Promise((resolve,reject)=>{
    
      post.push({title: 'post2'})
  resolve();
    
  })
  const add3=new Promise((resolve,reject)=>{
   
      post.push({title: 'post3'})
    resolve();
  })

  const update =new Promise((resolve,reject)=>
{
setTimeout(()=>{
  console.log(new Date().getTime());
  resolve();
},1000)

})
let adding1=await add1;
console.log('post 1 added');
let adding2=await add2;
console.log('post 2 added');
let adding3=await add3;
console.log('post 3 added');
let updting=await update;
console.log('updted time');
let deleting=deletePost();
let del=await deleting;
console.log(`deleted ${del}`);

return adding1;
}
postsAdd().then(()=>console.log(`posts added `))

//console.log(post.title)