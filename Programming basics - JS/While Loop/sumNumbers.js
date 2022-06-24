function solve(input){
    let n = Number(input.shift());
    let n2 = 0;
    while(true){
        n2 += Number(input.shift());

        if(n2 >= n){break;}
    }
    console.log(n2);
}