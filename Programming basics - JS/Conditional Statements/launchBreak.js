function solve(input){
    let serial = input.shift();
    let epLength = Number(input.shift());
    let restLength = Number(input.shift());
    
    let launchTime = restLength / 8;
    let restTime = restLength / 4;

    let leftTime = restLength - (launchTime + restTime);

    if(leftTime >= epLength){
        let freeTime =  leftTime - epLength;
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(freeTime)} minutes free time.`);
    }else{
        let timeNeeded = epLength - leftTime;
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}