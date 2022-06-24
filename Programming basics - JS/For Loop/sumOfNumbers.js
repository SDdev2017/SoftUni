function solve(arr){
    let n = arr.shift();
    n = n.split("").map(v=>Number(v)).reduce((a,b)=>a+b);
    console.log(`The sum of the digits is:${n}`);
}