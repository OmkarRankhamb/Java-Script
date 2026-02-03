
fetch("https://dummyjson.com/todos").then((e)=>{
    return e.json();
    
})
.then((e)=>{
  console.log(
    e.todos);
    
})
.catch((v)=>{
    console.log(v);
    
})