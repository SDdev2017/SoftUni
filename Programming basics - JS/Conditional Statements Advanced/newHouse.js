function solve(input){
    const prices = {
        Roses: 5,
        Dahlias: 3.80,
        Tulips: 2.80,
        Narcissus: 3,
        Gladiolus: 2.50
    };
    let flower = input.shift();
    let nFlowers = Number(input.shift());
    let budget = Number(input.shift()); 

    let total = nFlowers * prices[flower];
    
    if(flower == 'Roses' && nFlowers > 80){
        total -= total * 0.10;
    }
    if(flower == 'Dahlias' && nFlowers > 90){
        total -= total * 0.15;
    }
    if(flower == 'Tulips' && nFlowers > 80){
        total -= total * 0.15;
    }
    if(flower == 'Narcissus' && nFlowers < 120){
        total += total * 0.15;
    }
    if(flower == 'Gladiolus' && nFlowers < 80){
        total += total * 0.20;
    }

    let diff = Math.abs(budget - total);
    if(budget >= total){
        console.log(`Hey, you have a great garden with ${nFlowers} ${flower} and ${diff.toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
  }