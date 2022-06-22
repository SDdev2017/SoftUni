function solve(input){
    let type = input.shift();
    let rows = Number(input.shift());
    let cols = Number(input.shift());
    const prices = {
        Premiere: 12.00,
        Normal: 7.50,
        Discount: 5.00
    };
    
    let total = (rows * cols) * prices[type];
    console.log(total.toFixed(2) + " leva");

  }