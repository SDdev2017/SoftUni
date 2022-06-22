function solve(input){
    let nights = Number(input.shift()) - 1;
    let type = input.shift();
    let rate = input.shift();
    let total = 0;

    switch(type){
        case 'apartment':
            total = nights * 25;
            if(nights < 10){
             total = total * 0.70;
            }
            else if(nights >= 10 && nights <= 15){
             total = total * 0.75;
            }
            else{
             total = total * 0.50;
            }
         break;
         case 'president apartment':
            total = nights * 35;
            if(nights < 10){
             total = total * 0.90;
            }
            else if(nights >= 10 && nights <= 15){
             total = total * 0.85;
            }
            else{
             total = total * 0.80;
            }
         break;
         case 'room for one person':
           total = nights * 18;
         break;
    }

    if(rate == 'positive'){
        total += total * 0.25;
    }else{
     total -= total * 0.10;
    }

    console.log(total.toFixed(2));
}