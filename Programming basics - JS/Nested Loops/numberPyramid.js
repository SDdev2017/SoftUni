function solve(input){
    let n = Number(input.shift());
    let list = [];
    let row = 1;

    for(let i = 1; i <= n; i++){
      list.push(i);
      if(list.length == row || list[list.length - 1] == n){
          console.log(list.join(' '));
          list = [];
          row++;
      }           
    }

 }