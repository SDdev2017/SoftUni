function solve(input){
    let tournaments = Number(input.shift());
    let totalPoints = Number(input.shift());
    let points = 0;
    let wins = 0;
    let average = 0;

    for(let v of input){
        if(v == 'W'){
            points += 2000;
            wins++;
        }
        else if(v == 'F'){
            points += 1200;
        }
        else if(v == 'SF'){
            points += 720;
        }
        else{
            console.log('error');
        }
    }

    average = points / tournaments;
    wins = (wins / tournaments) * 100;

    console.log(`Final points: ${points + totalPoints}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(wins.toFixed(2) + '%');
}