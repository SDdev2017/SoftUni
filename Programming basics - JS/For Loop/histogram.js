function solve(arr){
    let count = Number(arr.shift());
    let nums = arr.map(v=>Number(v));
    let [p1,p2,p3,p4,p5] = [0,0,0,0,0];
    
     for(let n of nums){
        if(n < 200){p1++}
        else if(n >= 200 && n < 400){p2++}
        else if(n >= 400 && n < 600){p3++}
        else if(n >= 600 && n < 800){p4++}
        else{p5++}
     }

     p1 = (p1 / count) * 100;
     p2 = (p2 / count) * 100;
     p3 = (p3 / count) * 100;
     p4 = (p4 / count) * 100;
     p5 = (p5 / count) * 100;

     console.log(`${p1.toFixed(2)}%`);
     console.log(`${p2.toFixed(2)}%`);
     console.log(`${p3.toFixed(2)}%`);
     console.log(`${p4.toFixed(2)}%`);
     console.log(`${p5.toFixed(2)}%`);
     
  }