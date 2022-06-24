function exam(arr)
    {
        var i = 1;
        var examsLen = arr.length;
        var examName;
        var avgNum = 0;
        var avg = 0;
        var fails = 0;
        var numProbl = 0;
        var lastTask = "";
        
        while(i <= examsLen)
        {
                     
            if(arr[i]==="Enough")
            {
                console.log("Average score: " + (avg / avgNum).toFixed(2));
                console.log("Number of problems: " + numProbl);
                console.log("Last problem: " + lastTask);
                break;
            }
            if(Number(arr[i]) <= 4)
            {
                fails = fails + 1;
                if(fails === Number(arr[0]))
                {
                    console.log("You need a break, " + fails + " poor grades.");
                    break;
                }
            }
               
            if(i % 2 === 0)
            {
                
                avg = avg + Number(arr[i]);
                avgNum = avgNum + 1;
            }
            
            else if(i%2 === 1)
            {
                numProbl = numProbl + 1;
                lastTask = arr[i];
            }
            
            i = i+1;
                
        }
    }