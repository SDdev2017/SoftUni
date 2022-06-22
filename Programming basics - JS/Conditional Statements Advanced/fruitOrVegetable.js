function solve(input){
    let product = input.shift();

    const fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    const vege = ['tomato', 'cucumber', 'pepper', 'carrot'];

    if(fruits.includes(product)){
        console.log('fruit');
    }
    else if(vege.includes(product)){
        console.log('vegetable');
    }
    else{
        console.log('unknown');
    }
 }