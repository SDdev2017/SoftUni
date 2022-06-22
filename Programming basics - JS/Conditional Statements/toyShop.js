function solve(input){
    let moneyNeeded = Number(input.shift());
    let puzzels = Number(input.shift());   
    let talkingToys = Number(input.shift());    
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let nToys = puzzels + talkingToys + bears + minions + trucks;
    let total = (puzzels * 2.60) + (talkingToys * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);

    if(nToys >= 50){
        total -= total * 0.25;
    }

    total = total - (total * 0.10); //za naem 10% razhod

    if(total >= moneyNeeded){
        let leftMoney = (total - moneyNeeded).toFixed(2);
        console.log(`Yes! ${leftMoney} lv left.`);
    }else{
        let leftMoney = (moneyNeeded - total).toFixed(2);
        console.log(`Not enough money! ${leftMoney} lv needed.`);
    }

}