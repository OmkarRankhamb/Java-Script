
/**
 * Promise.allSettled();
 */

// All set in allSettled();



let prom1 = Promise.resolve("resole");

let prom2 = Promise.reject("second resole");

let prom3 = Promise.resolve("third resole");

Promise.allSettled([prom1,prom2,prom3])
.then((e)=>{
    console.log(e);
    
})
.catch((v)=>{
    console.log(v);
    
})