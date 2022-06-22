function solve(input){
    let type = input.shift();
    let result = 0;

    if(type == 'square'){
        let a = Number(input.shift());
        result = a**2;
    }
    if(type == 'rectangle'){
        let a = Number(input.shift());
        let b = Number(input.shift());
        result = a * b;
    }
    if(type == 'circle'){
        let radius = Number(input.shift());
        result = Math.PI * (radius**2);
    }
    if(type == 'triangle'){
        let a = Number(input.shift());
        let h = Number(input.shift());
        result = (a / 2) * h;
    }

    console.log(result.toFixed(3));
}