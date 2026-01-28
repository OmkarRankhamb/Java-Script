
let Student ={};
Object.defineProperties(Student,{
    "name":
    {
        value:"demo",
        enumerable:true
    },
    "marks":
    {
        value:56.78,
        enumerable:true
    }
})

console.log(Student);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log(Object.getOwnPropertyDescriptor(Student));

