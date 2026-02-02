

function Resolve (v)
{
    if(v>10)
    {
        return true;
    }
}

function Reject (v)
{
if(v<10)
{
    return false;
}
}

console.log(Resolve(11));
console.log(Reject(9));

