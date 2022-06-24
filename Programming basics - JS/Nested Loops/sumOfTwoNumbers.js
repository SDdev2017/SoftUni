function solve(input){
    let start = Number(input.shift())
    let end = Number(input.shift());
    let magicN = Number(input.shift());
    let combinations = 0;
    let msg = '';
    flag = false;

    for(let i = start; i <= end; i++){
        for(let b = start; b <= end; b++){
            let sum = i + b;
            combinations++;
            if(sum == magicN){
                msg = `Combination N:${combinations} (${i} + ${b} = ${sum})`;
                flag = true;
                break;
            }
        }
        if(flag){break;}
    }

    if(flag){
        console.log(msg);
    }else{
        console.log(`${combinations} combinations - neither equals ${magicN}`);
    }
}