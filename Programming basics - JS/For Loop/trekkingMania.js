function solve(input){
    let n = Number(input.shift());
    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for(v of input){
        let group = Number(v);
        totalPeople += group;

        if(group <= 5){
            musala += group;
        }
        else if(group >= 6 && group <= 12){
            monblan += group;
        }
        else if(group >= 13 && group <= 25){
            kilimandzharo += group;
        }
        else if(group >= 26 && group <= 40){
            k2 += group;
        }
        else if(group >= 41){
            everest += group;
        }
        else{
            console.log('error');
        }
    }

    musala = (musala / totalPeople) * 100;
    monblan = (monblan / totalPeople) * 100;
    kilimandzharo = (kilimandzharo / totalPeople) * 100;
    k2 = (k2 / totalPeople) * 100;
    everest = (everest / totalPeople) * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimandzharo.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
}