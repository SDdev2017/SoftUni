function solve(inp){
    let tax = Number(inp.shift());
    
    let sneakers = tax - tax * 0.40;
    let equip = sneakers - sneakers * 0.20;
    let ball = equip * 0.25;
    let accesoaries = ball * 0.20;
    
    console.log(tax + sneakers + equip + ball + accesoaries);
 }