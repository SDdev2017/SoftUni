function solve(input){
    let competitor1 = Number(input.shift());
    let competitor2 = Number(input.shift());
    let competitor3 = Number(input.shift());
    let totalTime = competitor1 + competitor2 + competitor3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime - minutes*60;

    if(seconds < 10){seconds = '0' + seconds};

    console.log(`${minutes}:${seconds}`);
}