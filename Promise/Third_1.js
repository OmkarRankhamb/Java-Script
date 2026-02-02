

let num = "2345678123239";

const prom = new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        if(num>=10)
        {
            return Resolve ("valid number");

        }
        else
        {
            return Reject ("Invalide number");
        }
    },4000)
})
function printre(v){
    console.log(v);
    
}

prom.then(printre).catch(printre);

setTimeout(() => {
    console.log(prom);
    
}, 15000);