function solve(input){
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let oper = input.shift();

    if(oper == "+" || oper == "*" || oper == "-"){
        let result = eval(`${n1}${oper}${n2}`);
        let type = (result % 2 == 0) ? "even" : "odd";

        console.log(`${n1} ${oper} ${n2} = ${result} - ${type}`);
    }
    else if(oper == "/"){
        if(n2 == 0){
            console.log(`Cannot divide ${n1} by zero`);
        }else{
            let result = eval(`${n1}${oper}${n2}`);
            console.log(`${n1} ${oper} ${n2} = ${(result).toFixed(2)}`);
        }
    }
    else if(oper == "%"){
        if(n2 == 0){
            console.log(`Cannot divide ${n1} by zero`);
        }else{
            let result = eval(`${n1}${oper}${n2}`);
            console.log(`${n1} ${oper} ${n2} = ${result}`);
        }
    }
  }