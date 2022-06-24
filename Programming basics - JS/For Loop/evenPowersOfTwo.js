function solve(arr){
    let n = Number(arr.shift());
    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
            console.log(Math.pow(2,i));
        }
    }
}