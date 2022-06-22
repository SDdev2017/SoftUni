function solve(arr){
    let budget = Number(arr.shift());
    let season = arr.shift();
    let destination = '';
    let spentMoney = 0;
    let typeOfRest = '';

    if(budget <= 100){
        destination = 'Bulgaria';
        if(season == 'summer'){
            spentMoney = budget * 0.30;
            typeOfRest = 'Camp';
        }else{
            spentMoney = budget * 0.70;
            typeOfRest = 'Hotel';
        }
    }
    else if(budget <= 1000){
        destination = 'Balkans';
        if(season == 'summer'){
            spentMoney = budget * 0.40;
            typeOfRest = 'Camp';
        }else{
            spentMoney = budget * 0.80;
            typeOfRest = 'Hotel';
        }
    }
    else{
        destination = 'Europe';
        typeOfRest = 'Hotel';
        spentMoney = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfRest} - ${spentMoney.toFixed(2)}`);
}