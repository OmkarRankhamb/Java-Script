

let dtt = setTimeout(Demo,300,"Amer");

Demo(45);
console.log("Hey boys!!!...");


function Demo(v){
    console.log(v);
    
}

setInterval(Demo2,2000,5);


let counter = 1;
function Demo2(v){
    if(counter==5){
        console.log(v);
        counter++;
    }
    


}
    
