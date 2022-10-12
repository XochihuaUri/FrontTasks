// function addingIngredient(ingredient) {
//     return new Promise((resolved, rejected) => {
//         setTimeout(resolved, 1000, ("Adding " + ingredient));
//         });
// }

// function ingredientAdded(ingredient) {
//     return new Promise((resolved, rejected) => {
//         setTimeout(resolved, 1000, (ingredient + " was added"));
//         });
// }

class Pizza{

    constructor(){
        this.ingredients = [];
    }

    cook(){
        setTimeout(function(){
            console.log("The pizza is rdy");
        },
        5000
        );
    }

    // SetIngredients(ingredient){
    //     setTimeout(function(){
    //         console.log("Adding: " + ingredient)
    //     },
    //     1000
    //     );
    //     this.ingredients.push(ingredient);
    //     setTimeout(function(){
    //         console.log(ingredient + " was added")
    //     },
    //     1000
    //     );
    // }
    

    // SettingIngredients(func, ingredient){
    //     func();
    // }
    // Ingredients(ingredient){
    //     this.SettingIngredients(this.SetIngredients, ingredient)
    // }


    async SetIngredients(ingredient){
        function addingIngredient(ingredient) {
            return new Promise((resolved, rejected) => {
                setTimeout(resolved, 1000, ("Adding " + ingredient));
                });
        }
        
        function ingredientAdded(ingredient) {
            return new Promise((resolved, rejected) => {
                setTimeout(resolved, 1000, (ingredient + " was added"));
                });
        }
        let a = await addingIngredient(ingredient);
        console.log(a);
        this.ingredients.push(ingredient);
        let b =  await ingredientAdded(ingredient);
        console.log(b);
    }

    

    GetIngredients(){
        return this.ingredients;
    }
}

let pizza1 = new Pizza();
await pizza1.SetIngredients("Queso");
await pizza1.SetIngredients("Peperoni");
await pizza1.SetIngredients("Piña");
console.log(pizza1.GetIngredients());
//pizza1.cook();

// class Pizza{
//     cook = async function(){
//     await sleep(5000)
//     console.log("The pizza is ready");
//     }
//     async addIngredients(ingredient){
//         console.log("Adding: "+ ingredient);
//         await sleep(1000);
//         this.ingredients.push(ingredient);
//         console.log(ingredient + " was added");
//     }

//     constructor(){
//         this.ingredients=[];
//     }
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }



// let p=new Pizza()
// p.addIngredients('tomate')
// p.addIngredients('queso')
// p.addIngredients('harina')
// console.log(p.ingredients)
// p.cook()