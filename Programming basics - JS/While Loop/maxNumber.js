function solve(input){
    input.pop();
    const arr = input.map(v=>Number(v));

    console.log(Math.max(...arr));
}