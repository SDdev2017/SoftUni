function solve(input){
    let n = Number(input.shift());
    let n2 = Number(input.shift());
    const arr = [];

    for(let i = n; i <= n2; i++){
        let chislo = String(i).split('').map(v=>Number(v));
        let oddSum = 0;
        let evenSum = 0;

        for(let idx = 0; idx < chislo.length; idx++){
            if(idx % 2 == 0){
                oddSum += chislo[idx];
            }
            else{
                evenSum += chislo[idx];
            }
        }

        if(oddSum == evenSum){
            arr.push(chislo.join(""));
        }
    }

    console.log(arr.join(" "));
 }