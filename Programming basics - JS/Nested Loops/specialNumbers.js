function solve(input){
    let n = Number(input.shift());
    const list = []; 
  
    for(let a = 1; a <= 9; a++){
      for(let b = 1; b <= 9; b++){
        for(let c = 1; c <= 9; c++){
          for(let d = 1; d <= 9; d++){
            let sum = (n%a) + (n%b) + (n%c) + (n%d);
            if(sum == 0){
              list.push(`${a}${b}${c}${d}`);
            }
          }
        }
      }
    }
  
    console.log(list.join(" "));
  }