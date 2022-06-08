function solve(inp){
    let sum = Number(inp.shift());
    let depositTime = Number(inp.shift());
    let lihva = Number(inp.shift()) / 100;
    lihva = (sum * lihva) / 12;
    
    console.log(sum + (depositTime * lihva));
}