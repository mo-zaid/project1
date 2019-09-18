var x
function hello(x)
{
    if (x>=0)
        {
           document.write("this num is pos") 
        }
    else throw "x is not pos "

}

var x=parseInt(prompt("enter num : "));
hello(x);