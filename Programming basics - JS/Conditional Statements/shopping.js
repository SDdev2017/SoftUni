function solve(input){
    let budget = Number(input.shift());
    let vCards = Number(input.shift());
    let processor = Number(input.shift());
    let ram = Number(input.shift());

    let vCardsSum = vCards * 250;
    let processorSum = processor * (vCardsSum * 0.35);
    let ramSum = ram * (vCardsSum * 0.10);

    let total = vCardsSum + processorSum + ramSum;
    if(vCards > processor){
        total -= total * 0.15;
    }

    let diff = Math.abs(budget - total);

    if(budget >= total){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}  