function solve(input){
    let age = Number(input.shift());
    let laundryPrice = Number(input.shift());
    let toyPrice = Number(input.shift());
    let toys = 0;
    let money = 0;
    let gift = 10;
    

    for(let i = 1; i <= age; i++){
        if(i % 2 == 0){
            money = money + (gift - 1);
            gift += 10;
        }else{
            toys += toyPrice;
        }
    }

    money = money + toys;
    let diff = Math.abs(money - laundryPrice);

    if(money >= laundryPrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
}