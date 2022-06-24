function solve(input){
    let n = Number(input.shift());
    let counter = 0;
    for(let i = 0; i <= n; i++){
        for(let b = 0; b <= n; b++){
            for(let c = 0; c <= n; c++){
                let sum = i + b + c;
                if(sum == n){
                    counter++;
                }
            }
        }
    }

    console.log(counter)
}