var x;
function bello(x)
{
    if(x>=0)
        {
            return x;
        }
    else throw "num must be pos";
}
try{
    var n=Number(prompt("enter num",""));
    bello(n);
    alert(n+" is pos");
}catch(y)
    {
        alert(y)
        document.write(y)
    }
finally {
    alert("Finally, I got it");
}