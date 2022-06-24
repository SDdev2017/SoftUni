function books(arr)
    {
        let stop = arr.length - 1;
        let i = 1;
        let founded = false;
        let numBooks;
        while(i <= stop)
        {
            if(arr[i] !== "No More Books")
            {
                if (arr[i] === arr[0])
                {
                    founded = true;
                    break;
                }                
            }
            else
            {
                break;
            }
            
            i = i + 1;
        }
        
        numBooks = i - 1;
        
        if(founded === true)
        {
            console.log("You checked " + numBooks + " books and found it.");
        }
        
        else
        {
            console.log("The book you search is not here!");
            console.log("You checked " + numBooks + " books.");
        }
    }