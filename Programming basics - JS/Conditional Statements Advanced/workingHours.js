function solve(input){
    let hours = Number(input.shift());
    let day = input.shift();

    let workDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    if(hours >= 10 && hours <= 18){
       if(workDays.includes(day)){
           console.log('open');
       }else{
           console.log('closed');
       }
    }else{
           console.log('closed');
    }

 }  