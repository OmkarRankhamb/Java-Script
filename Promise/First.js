


//const prom = new Promise();


// function Combine(Resolve,Reject){
//     exkuter;
// }




// function Resolve(v){
//     if(v>10){
//         return true;
//     }
// }

// function Reject (v){
//     if(v<10){
//         return false;
//     }
// }

// //console.log(Resolve(10));
// //console.log(Reject(9));

const prom = new Promise((Resolve,Reject)=>{
//prom.then((Resolve,Reject)=>{
 let v= 10;

 setTimeout(()=>{
    if(v>50){
        return Resolve("promiss solve "+v);
    }

    else
        return  Reject ("small value");
 })
  },1000)



 


prom.then((v)=>{
console.log(v);

}).catch((e)=>{
    console.log(e);
    
})
console.log(prom);

setTimeout(()=>{
    console.log(prom);
    
},6000);
