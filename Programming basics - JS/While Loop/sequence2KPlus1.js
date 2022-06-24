function solve(input){
    let n = Number(input.shift());
    let n2 = 1;
    
      console.log(n2);
    while(true){
        n2 = (2 * n2) + 1;
        if(n2 > n){
            break;
        }
        console.log(n2);
    }
}