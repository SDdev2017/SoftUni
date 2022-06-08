function solve(inp){
    let totalPages = Number(inp.shift());
    let pageHour = Number(inp.shift());
    let days = Number(inp.shift());
    let timeNeeded = (totalPages / pageHour) / days;
    
    console.log(timeNeeded);            
}