for (var i=0;i<3;i++)
    {
        var x=0
        wh:while (x<10)
            {
                x++;
                console.log("while loop with break : "+x);
                if (x==5){
                    break;
                }
            }
        var j=0;
        cont: while(j<6)
            {
                j++;
                
                if(j==3){
                    continue;
                }console.log("continue "+j)
                    
            }
    }