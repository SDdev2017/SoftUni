function solve(input){
    let points = Number(input.shift());
    let bonusPoints = 0;

    if(points <= 100){
        bonusPoints += 5;
    }
    else if(points > 100 && points <= 1000){
        bonusPoints += points * 0.20;
    }
    else{
        bonusPoints += points * 0.10;
    }

    if(points % 2 == 0){
        bonusPoints += 1;
    }
    if(points % 10 == 5){
        bonusPoints += 2;
    }

    console.log(`${bonusPoints}\n${bonusPoints + points}`);
}