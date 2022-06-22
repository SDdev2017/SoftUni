function solve(input){
    let degrees = Number(input.shift());
    let partOfDay = input.shift();
    let outfit = '';
    let shoes = '';

    switch(partOfDay){
        case "Morning":
            if(degrees >= 10 && degrees <= 18){
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            }
            else if(degrees > 18 && degrees <= 24){
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if(degrees > 24){
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            else{
                console.log("");
            }
        break;
        case "Afternoon":
            if(degrees >= 10 && degrees <= 18){
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if(degrees > 18 && degrees <= 24){
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            else if(degrees > 24){
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            else{
                console.log("");
            }
        break;
        case "Evening":
            if(degrees >= 10 && degrees <= 18){
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if(degrees > 18 && degrees <= 24){
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if(degrees > 24){
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else{
                console.log("");
            }
        break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
  }