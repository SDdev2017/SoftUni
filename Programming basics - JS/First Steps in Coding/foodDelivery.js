function solve(inp){
    let chicken = Number(inp.shift()) * 10.35;
    let fish = Number(inp.shift()) * 12.40;
    let vege = Number(inp.shift()) * 8.15;
    let desert = (chicken + fish + vege) * 0.20;
    
    console.log(chicken + fish + vege + desert + 2.50);
 }