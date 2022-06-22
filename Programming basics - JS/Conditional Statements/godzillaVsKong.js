function solve(input){
    let budget = Number(input.shift());
    let nStatists = Number(input.shift());
    let priceForDressing = Number(input.shift());
    let total = (nStatists * priceForDressing);
    let decorPrice = budget * 0.10;

    if(nStatists > 150){total -= total * 0.10};

    total += decorPrice;

    if(budget >= total){
        let leftMoney = (budget - total).toFixed(2);
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney} leva left.`);
    }
    else{
        let leftMoney = (total - budget).toFixed(2);
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${leftMoney} leva more.`);
    }
}