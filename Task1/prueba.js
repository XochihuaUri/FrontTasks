let array = [1,3,5,2,2,2];

const average = (params) =>{
    let sum = 0;
    params.map((x)=> sum += x);
    return(sum/params.length)
}


const sumOdds = (params)=>{
    let sum = 0;
    let arrayOdds = [];
    params.map((x) => {
        if(x % 2 != 0){
            arrayOdds.push(x);
        } 
    });
    arrayOdds.map((x)=> sum += x);
    return(sum);
} 


function sum(a,b){
    if(!isNaN(a) && !isNaN(b) && a >= 0 && b >= 0){
        return a + b;
    }
    return 0;
}

function remainder(a,b){
    if(!isNaN(a) && !isNaN(b) && a >= 0 && b >= 0){
        return a - b;
    }
    return 0;
}

function multiplication(a,b){
    if(!isNaN(a) && !isNaN(b) && a >= 0 && b >= 0){
        return a * b;
    }
    return 0;
}

function division(a,b){
    if(!isNaN(a) && !isNaN(b) && a >= 0 && b >= 0){
        return a / b;
    }
    return 0;
}

let arrayOperationResults = [];

function Operations(fn, a, b){
    let result = fn(a,b);
    arrayOperationResults.push(result);
    return result
}


//let array = [1,3,5,2,2,2];
console.log(average(array))
console.log(sumOdds(array));

console.log(Operations(sum,2,3));
console.log(Operations(remainder,2,3));
console.log(Operations(multiplication,2,3));
console.log(Operations(division,2,3));

console.log(arrayOperationResults);




// function Operations(a,b){
//     let results = [];
//     results.push(sum(a,b));
//     results.push(remainder(a,b));
//     results.push(multiplication(a,b));
//     results.push(division(a,b));
//     return results;
// }

//console.log(Operations(2,3))

// console.log(sum(2,3),remainder(2,3), multiplication(5,5), division(9,3));

// console.log(sum(2,"asd"),remainder(2,"asd"), multiplication(5,"asd"), division(9,"asd"), division(9,0));