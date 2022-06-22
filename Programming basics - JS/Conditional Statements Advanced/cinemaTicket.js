function solve(input){
    let day = input.shift();

    const table = {
        Monday: 12,
        Tuesday: 12,
        Wednesday: 14,
        Thursday: 14,
        Friday: 12,
        Saturday: 16,
        Sunday: 16
    };

    console.log(table[day]);
 }  