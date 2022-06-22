function solve(input){
    let years = Number(input.shift());
    let sex = input.shift();

    if(sex == "m"){
        if(years < 16){
            console.log("Master");
        }else{
            console.log("Mr.");
        }
    }else{
       if(years < 16){
            console.log("Miss");
        }else{
            console.log("Ms.");
        }
    }
 }  