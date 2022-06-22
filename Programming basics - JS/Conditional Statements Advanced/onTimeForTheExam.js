function solve2(input){
    let examHrs = Number(input.shift());
    let examMins = Number(input.shift());
    let StudentHrs = Number(input.shift());    
    let StudentMins = Number(input.shift());

    if(StudentHrs == 0 && (24 - examHrs == 1)){StudentHrs = 24}
    else if(examHrs == 0 && (24 - StudentHrs  == 1)){examHrs = 24;}

    let diff = ((examHrs - StudentHrs) * 60) + (examMins - StudentMins);
    let hours = Math.floor(Math.abs(diff) / 60);
    let mins = Math.abs(diff) - (hours * 60);       

    if(diff == 0){
        console.log('On time');
    }
    else if(diff < 0){
        diff = Math.abs(diff);                
        
        console.log('Late');
        if(diff > 59){       
            mins = (mins < 10) ? `0${mins}` : mins;            
            console.log(`${hours}:${mins} hours after the start`);
        }else{                    
            console.log(`${mins} minutes after the start`);
        }
    }
    else if(diff > 0){
        diff = Math.abs(diff);

        if(diff <= 30){
            console.log('On time');
            console.log(`${mins} minutes before the start`);
       }
       else{
            console.log('Early');
            if(diff > 59){
                mins = (mins < 10) ? `0${mins}` : mins;
                console.log(`${hours}:${mins} hours before the start`);
            }else{
                console.log(`${mins} minutes before the start`);
            }
       }
    }
}