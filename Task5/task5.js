import fetch from "node-fetch";

async function main() {  
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await data.json();
    console.log(json);
    return json;
}

 let res = await main();
 console.log(res);


(async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await data.json();
    console.log(json)
})()

await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json().then(response => console.log(response)));
