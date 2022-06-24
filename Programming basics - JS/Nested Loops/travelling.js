function solve(input) {
    while(true){
      let country = input.shift();
      if(country == "End"){break;}    
      let budget = Number(input.shift());
      let sum = 0;
      while(true){
        sum += Number(input.shift());
        if(sum >= budget){        
          console.log('Going to ' + country + "!");
          break;
        }
      }    
    }
  }