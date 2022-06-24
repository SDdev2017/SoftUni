function feetMetr(arr)
    {
        var i = 0;
        var end = arr.length - 1;
        var totalFeet = 0;
        
        while(i <= end)
        {
            if(arr[i] !== "Going home")
            {
                totalFeet = totalFeet + Number(arr[i]);
            }
            else
            {
                totalFeet = totalFeet + Number(arr[i+1]);
                break;
            }
            i++;
        }
        
        if(totalFeet < 10000)
        {
            console.log((10000 - totalFeet) +" more steps to reach goal.");
        }
        else
        {
            console.log("Goal reached! Good job!"); 
            console.log((totalFeet - 10000) + " steps over the goal!");
        }
    }