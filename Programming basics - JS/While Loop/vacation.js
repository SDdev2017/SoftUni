function holiday(arr)
    {
        var i = 2;
        var end = arr.length-1;
        var currentMoney = Number(arr[1]);
        var days = 0;
        var counter = 0;
        var isCont = false;
        
        while(i <= end)
        {
            if(i % 2 === 0)
            {
                if(arr[i] === "spend")
                {
                    currentMoney = currentMoney - Number(arr[i + 1]);
                    
                    if(currentMoney < 0)
                    {
                        currentMoney = 0;
                    }
                    days=days+1;
                    counter=counter+1;
                }
                else
                {
                    currentMoney = currentMoney + Number(arr[i + 1]);        
                    days=days+1;
                    counter=0;
                }
            }
            
            if(days >= 5)
            {
                if(days === counter)
                {
                    console.log("You can't save the money.");
                    console.log(days);
                    break;
                }
            }
            
            if(currentMoney >= Number(arr[0]))
            {
               console.log("You saved the money for " + days + " days.");
               break;
            }
            
            
            i++;
        }
   
    
        if(currentMoney < arr[0])
        {
            console.log("You can't save the money.");
            console.log(days);
        }
    }