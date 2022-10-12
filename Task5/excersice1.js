import fetch from "node-fetch";

async function completedTrue(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    const array = data.filter(element => element.completed);
    return array;
    //return data;
}
// let arrayOfItems = await completedTrue();

// let arrayWithTrues = arrayOfItems.filter(element => element.completed);

//console.log(arrayWithTrues);
//console.log(await completedTrue())
//console.log(await completedTrue());


// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(res => res.filter(element => element.address.zipcode[0] == 5))
// .then(response => console.log(response))
