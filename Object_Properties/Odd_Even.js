
let arr=[12,45,34,33,91];

function cheak(i)
{
    if(i%2==0)
    {
        return "even";
    }
    return "odd";
}
console.log(Object.groupBy(arr,cheak));


