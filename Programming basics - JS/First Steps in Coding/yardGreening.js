function solve(inp){
    let metres = Number(inp.shift());
    let total = metres * 7.61;
    let discount = total * 0.18;
    total = total - discount;
    
    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`); 
  }