function solve(input){
    let i = 0;
    let primeSum = 0;
    let noPrimeSum = 0;  
    while(input[i] !== "stop"){
      let n = Number(input[i]);
      if(n < 0){
        console.log("Number is negative.");
        continue;
      }    
      let isPrime = true;
      if(n == 1 || n == 2){
        isPrime = true;
      }else{      
        let sqrtNum = Math.floor(Math.sqrt(n));    
        for(let i = 2; i <= sqrtNum; i++){
          if(n % i == 0){
            isPrime = false;
            break;
        }
        }
      }
  
      if(isPrime){
        primeSum += n;
      }else{
        noPrimeSum += n;
      }  
      i++;
    }
  
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${noPrimeSum}`);
  }
  