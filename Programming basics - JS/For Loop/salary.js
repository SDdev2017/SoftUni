function solve(input){
    let tabsCount = Number(input.shift());
    let salary = Number(input.shift());
    let message = '';

    for(v of input){
        switch(v){
            case 'Facebook': 
                salary -= 150; 
            break;  
            case 'Instagram':
                salary -= 100;
            break;
            case 'Reddit':
                salary -= 50;
            break;
            default:
                
        }

        if(salary <= 0){
            message = 'You have lost your salary.';
            break;
        }else{
            message = Math.trunc(salary);
        }
    }

    console.log(message);
}