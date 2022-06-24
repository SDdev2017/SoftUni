function solve(input){
    let studentName = input.shift();
    input = input.map(v=>Number(v));
    let grade = 0;
    let counter = 0;
    let avgGrade = input.reduce((a,b)=>a+b);
    avgGrade = avgGrade / input.length;

    let message = `${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`;

    while(grade <= 12){
        grade++;
        let ocenka = input.shift();

        if(ocenka < 4){
            counter++;

            if(counter > 1){
                message = `${studentName} has been excluded at ${grade-1} grade`;
                break;
            }
        }              
    }

    console.log(message);

}