
function hello (x,y){
    return result=x/y;
}

try{
    var x=parseInt(prompt("enter first num "))
var y=parseInt(prompt("enter second number "));
var result;

    if(y==0)
        {
            throw "y is zero and its exception "
        }
    else{
        document.write("the result of div is :  "+hello(x,y))
    }

}
catch(y)
    {
        alert(y)
    }
finally{
    alert(" dont repeat it you stupid idiot")
}