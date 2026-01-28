
let obj={
    "name":"mahi patil",
    "city": "latur",
    "State": "Maharashtra"
}

/**
 * 
 */
console.log(obj);


Object.defineProperties(obj,"age",{
 Value :"Mumbai",
 Enumerabla : true,
configurable: true,
writable :true

})

console.log(obj);


obj.age="45";
console.log(obj);


console.log(Object.getOwnPropertyDescriptor(obj,"age"));


