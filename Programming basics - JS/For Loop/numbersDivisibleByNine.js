function solve(arr){
    let start = Number(arr.shift());
    let end = Number(arr.shift());
    let nums = [];

    for(let i = start; i <= end; i++){
        if(i % 9 == 0){
         nums.push(i);
        }
    }

    console.log(`The sum: ${nums.reduce((a,b) => a+b)}`);
    for(v of nums){
     console.log(v);
    }
}