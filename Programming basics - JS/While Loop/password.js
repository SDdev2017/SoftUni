function solve(input){
    let username = input.shift();
    let pass = input.shift();

    while(true){
        let line = input.shift();
        
        if(line == pass){
            console.log(`Welcome ${username}!`);
            break;
        }
    }
}