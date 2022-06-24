function solve(arr){
    let text = arr.shift();
    let sum = 0;
    const vowels = {a: 1, e: 2, i: 3, o: 4, u: 5};
    
    for(l of text){
        if(vowels.hasOwnProperty(l)){
            sum += vowels[l];
        }
    }

    console.log(sum);
}