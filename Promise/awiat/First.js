

let num =12;

const prom= new Promise((res,rej)=>{
    setTimeout(()=>{
        if(num==13){
            return res("valid ");
        }
        else{
            return rej("not valid");
        }
    },2000)
})
// prom.then((v)=>{
//     console.log(v);
    
// })
// .catch((e)=>{
//     console.log(e);
    
// })

async function peomi()
{
    try{
     let result = await prom;
     console.log(result);
     
    }
    catch(e){
         console.log(e);
         
    }
}
peomi();