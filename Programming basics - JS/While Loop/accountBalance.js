function solve(input){
    let i = 0;
    let total = 0;

    while(input[i] != 'NoMoreMoney'){
        let payment = Number(input[i]);
        if(payment < 0){
            console.log('Invalid operation!');
            break;
        }
        total += payment;
        console.log(`Increase: ${payment.toFixed(2)}`);
        i++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}