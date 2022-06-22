function solve(input){
    let day = input.shift();
    const workDays = ["Monday", "Tuesday", "Thursday", "Wednesday", "Friday"];
    const weekend = ["Saturday", "Sunday"];

    if(workDays.includes(day)){
        console.log("Working day");
    }
    else if(weekend.includes(day)){
      console.log("Weekend");
    }
    else{
        console.log("Error");
    }
}  