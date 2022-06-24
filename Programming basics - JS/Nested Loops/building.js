function solve(input){
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for(let fl = floors; fl >= 1; fl--){
        let type = '';
        if(fl == floors){
            type = 'L';
        }else{
            if(fl % 2 == 0){
                type = 'O';
            }else{
                type = 'A';
            }
        }
        const list = [];

        for(let rm = 0; rm < rooms; rm++){
            let roomNum = `${type}${fl}${rm}`;
            list.push(roomNum);
        }

        console.log(list.join(" "));
    }
 }