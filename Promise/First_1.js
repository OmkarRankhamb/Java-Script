

const prom = new Promise((Resolve,Reject)=>{
let v = 100;
if(v>50){
    console.log(v);
    
}
else
    console.log("small value");
    
})


prom.then(()=>{
    console.log(v);
    
})
.catch((e)=>{
  console.log(e);
  
})

setTimeout(()=>{
console.log(prom);

},6000)