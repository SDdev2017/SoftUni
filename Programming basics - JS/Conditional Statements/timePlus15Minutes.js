function solve(input){
    let hours = Number(input.shift());
    let mins = Number(input.shift());

    mins += 15;

    if(mins > 59){
        if(hours == 23){
            hours = 0;
        }else{
            hours += 1;
        }
        mins = mins - 60;
    }

    if(mins < 10){
        mins = '0' + mins;
    }

    console.log(`${hours}:${mins}`);
}