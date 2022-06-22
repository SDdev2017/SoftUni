function solve(input){
    let num = Number(input.shift());

    if(num >= -100 && num <= 100){
       if(num != 0){
           console.log("Yes")
       }
       else{
           console.log("No");
       }
    }
    else{
        console.log("No");
    }
 }  