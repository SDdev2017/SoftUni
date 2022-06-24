function solve(input){
    let pcsCake = Number(input.shift()) * Number(input.shift());
    let i = 0;

    while(true){
        if(input[i] == 'STOP'){
            console.log(`${pcsCake} pieces are left.`);
          break;
        }
        pcsCake -= Number(input[i]);

        if(pcsCake < 0){
            console.log(`No more cake left! You need ${Math.abs(pcsCake)} pieces more.`);
            break;
        }

        i++;
    }

}