function solve(arr){
    let archName = arr.shift();
    let prs = Number(arr.shift());
    
    console.log(`The architect ${archName} will need ${prs*3} hours to complete ${prs} project/s.`);
  }