function solve(input){
    let correctPsw = "s3cr3t!P@ssw0rd";
    let pass = input.shift();

    if(pass == correctPsw){
        console.log('Welcome');
    }else{
        console.log("Wrong password!");
    }
}