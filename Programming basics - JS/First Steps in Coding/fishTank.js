function solve(inp){
    let len = Number(inp.shift());
    let width = Number(inp.shift());
    let height = Number(inp.shift());
    let prc = Number(inp.shift()) / 100;
    let obem = 0;
    
    obem = (len * width * height) / 1000;
    obem = obem * (1 - prc);
    
    console.log(obem);
 }