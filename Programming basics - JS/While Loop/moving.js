function moving(arr)
        {
            var freeSpace = arr[0]*arr[1]*arr[2];
            var i = 3;
            var end = arr.length - 1;
            var space = 0;
            
            while(i<=end)
            {
                if((arr[i]==="Done") || (space > freeSpace))
                {
                    break;
                }
                else
                {
                    space = space + (arr[i] * 1);
                }
                                       
                i++;
            }
            
            if(space > freeSpace)
            {
                console.log("No more free space! You need " + (space-freeSpace) + " Cubic meters more.");
            }
            else
            {
                console.log((freeSpace - space) + " Cubic meters left.");
            }
        }