function solve(input){
    let flag = false;
    let students = 0;
    let kids = 0;
    let standard = 0; 
    while(true){
        if(flag){break;}
        let count = 0;    
        let movieName = input.shift();
        let freeSeats = Number(input.shift());

        while(true){
        let line = input.shift();
        if(line === "End"){break;}
        if(line === "Finish"){
            flag = true;
            break;
        }

        count++;      
        if(line === "student"){
            students++;
        }else if(line === "kid"){
            kids++;
        }else{
            standard++;
        }
        }

        let cap = (100 / freeSeats) * count;
        console.log(`${movieName} - ${cap.toFixed(2)}% full.`)
    }

    let totalTickets = students + standard + kids;
    console.log(`Total tickets: ${totalTickets}`);
    standard = (100 / totalTickets) * standard;
    kids = (100 / totalTickets) * kids;
    students = (100 / totalTickets) * students;

    console.log(`${students.toFixed(2)}% student tickets.`);
    console.log(`${standard.toFixed(2)}% standard tickets.`);
    console.log(`${kids.toFixed(2)}% kids tickets.`);      
    }