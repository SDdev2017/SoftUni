function solve(input){
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());
    
    const workDays = ["Monday", "Tuesday", "Thursday", "Wednesday", "Friday"];
    const weekend = ["Saturday", "Sunday"];

    const priceWork = {
        
            banana: 2.50,
            apple: 1.20,
            orange: 0.85,
            grapefruit: 1.45,
            kiwi: 2.70,
            pineapple: 5.50,
            grapes: 3.85
        };
    const priceWeekend = {
            banana: 2.70,
            apple: 1.25,
            orange: 0.90,
            grapefruit: 1.60,
            kiwi: 3.00,
            pineapple: 5.60,
            grapes: 4.20           
    };

    if(workDays.includes(day)){
        if(priceWork.hasOwnProperty(fruit)){
            console.log((priceWork[fruit] * quantity).toFixed(2));
        }else{
            console.log("error");
        }
    }else if(weekend.includes(day)){
        if(priceWeekend.hasOwnProperty(fruit)){
            console.log((priceWeekend[fruit] * quantity).toFixed(2));
        }else{
            console.log("error");
        }
    }
    else{
        console.log('error');
    }
  }