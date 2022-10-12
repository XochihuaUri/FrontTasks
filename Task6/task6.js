function PrintName(name){
    setTimeout(function(){
        console.log("The name received is: " + name);
    },
    5000
    );
}

PrintName("ASD");

function job(data) {
    return new Promise((resolved, rejected) => {
        if(isNaN(data)){
        rejected('error');
        } else if(data%2 !== 0) {
        setTimeout(resolved, 1000, 'odd');
        } else {
        setTimeout(rejected, 2000, 'even');
        }
        });
}

job("A")
.then(res => console.log(res))
.catch(e=> console.log(e))

job(1)
.then(res => console.log(res))
.catch(e=> console.log(e))

job(2)
.then(res => console.log(res))
.catch(e=> console.log(e))

