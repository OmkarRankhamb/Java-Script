

let dt=setTimeout(Demo,1000,"nothing")


Demo(5778);
console.log("hey boys");

function Demo(v){
    console.log(v);
    
}

clearTimeout(dt);