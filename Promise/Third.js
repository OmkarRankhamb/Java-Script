
/**
 * let number= "3456789";
 * let length ="10";
 * let 10 => resolve
 */



let num = "1234567891";

const prom = new Promise((resolve,Reject)=>{

    setTimeout(() => {
        if(num == 10)
        {
            return resolve ("valide number");
        }
        else
        {

         return Reject ("Invalide number");

        }
    }, 2000);
})

function print(v)
{
    console.log(v);
    
}

prom.then(print).catch(print);

setTimeout(()=>{
    console.log(prom);
    
},5000);