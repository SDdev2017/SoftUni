function solve(input){
    let n = Number(input.shift());
    let totalAvg = 0;
    let count = 0;
    while(true){
      let name = input.shift();
      let avg = 0;
      if(name == "Finish"){break;}
  
      for(let i = 1; i <= n; i++){
        count++;
        let ocenka = Number(input.shift());
        avg += ocenka;
      }
  
      totalAvg += avg;
      avg = avg / n;
      console.log(`${name} - ${avg.toFixed(2)}.`);
    }
  
    totalAvg = totalAvg / count;  
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`)
  }