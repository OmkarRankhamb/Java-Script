

/**
 * .race();            
 */


const prom = new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        return Resolve("pass");
    },1500);
})

const prom1 = new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        return Reject("fail");
    },5000);
})

Promise.race([prom,prom1])
.then((v)=>{
    console.log(v);
    
})
.catch((e)=>{
    console.log(e);
    
})