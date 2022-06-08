function solve(inp){
    let nailon = Number(inp.shift());
    let dye = Number(inp.shift());
    let razreditel = Number(inp.shift());
    let hours = Number(inp.shift());
    let total = 0;
    
    nailon = (nailon + 2) * 1.50;
    dye = (dye + (dye * 0.10)) * 14.50;
    razreditel = razreditel * 5;
    total = nailon + dye + razreditel + 0.40;
    total += (total * 0.30) * hours;
    
    console.log(total);
 }