let arrayOfStrings = ["Hello", "how", "are", "you","?"];


function joinToString(array){
    return array.join(" ");
}

console.log(joinToString(arrayOfStrings));


function joinToStringSlash(array){
    return array.join("-");
}

console.log(joinToStringSlash(arrayOfStrings));


let arrayOfNumbers = [0,0,1,2,3,4,6];
let arrayOfNumbers2 = [0,2,4,6,7,8,10]

function betweenEvens(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0 && array[i+1] % 2 == 0){
            array.splice((i+1), 0, "-")
        }
    }
    return array.join("");
}

console.log(betweenEvens(arrayOfNumbers));
console.log(betweenEvens(arrayOfNumbers2));