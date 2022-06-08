function solve(inp){
    let pens = Number(inp.shift()) * 5.80;
    let markers = Number(inp.shift()) * 7.20;
    let preparat = Number(inp.shift()) * 1.20;
    let discount = Number(inp.shift()) / 100;
    let total = pens + markers + preparat;
    
    total = total - (total * discount);
    console.log(total);
 }