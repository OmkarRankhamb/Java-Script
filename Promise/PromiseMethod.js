
/**
 * Promise.all();
   Promise.allSettled();
   Promise.any();
   Promise.race();
 */
   /// let pro1 = Promise.resolve("reject"); // One reject => print reject & all resolve => all resolve


   let prom1 = Promise.resolve("reject");

   let prom2 = Promise.resolve( "resolve pass");

   let prom3 = Promise .resolve ("error");

   Promise.all([prom1,prom2,prom3])
   .then((v)=>{
    
    console.log(v);
   // console.log("*");
    
    
   })
.catch((e)=>{
    console.log(e);
   // console.log("8");
    
    
})
   