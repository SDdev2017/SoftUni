function coinChange(arr)
    {
        var indx = arr[0].indexOf(".");
        var endStr = arr[0].length;
        var moneyChange = 0;
        var one = Number(arr[0].slice(0,indx));
        var two = Number(arr[0].slice(indx+1, endStr));
        
        if(one % 2 === 0)
        {
            moneyChange = one/2;
        }
        else
        {
            moneyChange = ((one-1)/2) + 1;
        }
        
        if(two/50 >= 1)
        {
            moneyChange = moneyChange+1;
            two = two - 50;
        }
        if(two/20 >= 1)
        {            
            moneyChange = moneyChange + (Math.floor(two/20));
            two = two - 20*(Math.floor(two/20));
        }
        if(two/10 >= 1)
        {
            moneyChange = moneyChange + (Math.floor(two/10));
            two = two - 10*(Math.floor(two/10));
        }
        if(two/5 >= 1)
        {
            moneyChange = moneyChange + (Math.floor(two/5));
            two = two - 5*(Math.floor(two/5));
        }
        if(two/2 >= 1)
        {
            moneyChange = moneyChange + (Math.floor(two/2));
            two = two - 2*(Math.floor(two/2));
        }
        if(two/1 >= 1)
        {
            moneyChange = moneyChange + (Math.floor(two/1));
            two = two - 1*(Math.floor(two/1));
        }
        
        console.log(moneyChange);
    }