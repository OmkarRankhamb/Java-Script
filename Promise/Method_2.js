/**
 * .any();
 * 
 */

// All reject => print all  &&  one reject print => one resolve


let prom1 = Promise.reject("reject");

let prom2 = Promise.resolve("second resolve");

let prom3 = Promise.reject("Third resolve");

Promise.any([prom1,prom2,prom3])

.then((e)=>{
    console.log(e);
    
})
.catch((v)=>{
    console.log(v);
    
})