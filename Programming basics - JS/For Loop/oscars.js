function solve(input){
    let actorName = input.shift();
    let points = Number(input.shift());
    let n = Number(input.shift());

    for(let i = 0; i < n; i++){
        let name = input.shift();
        let rate = Number(input.shift());

        points += (name.length * rate) / 2;

        if(points > 1250.5){
            break;
        }
    }

    if(points > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
    }else{
        let diff = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
    }
}