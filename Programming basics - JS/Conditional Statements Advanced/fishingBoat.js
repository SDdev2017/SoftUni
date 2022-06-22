function solve(arr){
    let budget = Number(arr.shift());
    let season = arr.shift();
    let fishers = Number(arr.shift());
    let rent = 0;

    if(season == 'Spring'){
        rent = 3000;
    }
    else if(season == 'Summer' || season == 'Autumn'){
        rent = 4200;
    }
    else if(season == 'Winter'){
        rent = 2600;
    }
    else{
        console.log('Error');
    }

    if(fishers <= 6){rent -= rent * 0.10}
    else if(fishers >= 7 && fishers <= 11){rent -= rent * 0.15}
    else if(fishers >= 12){rent -= rent * 0.25}

    if((fishers % 2 == 0) &&  season != 'Autumn'){
        rent -= rent * 0.05;
    }

    let diff = Math.abs(budget - rent);

    if(rent <= budget){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}