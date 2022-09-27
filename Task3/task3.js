function areBracketsBalanced(str)
{
    let arrayWithNoSpaces = str.split(" ");
    let stringToEvaluate = arrayWithNoSpaces.join("");
    let stack = [];
    // Traversing the Expression
    for(let i = 0; i < stringToEvaluate.length; i++)
    {
        let x = stringToEvaluate[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
        }

        if (stack.length == 0){
            return "No balanceado";
        }

        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return "No balanceado";
            break;
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return "No balanceado";
            break;
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return "No balanceado";
            break;
        }
    }

    if(stack.length == 0){
        return "Balanceado"
    }else{
        return "No balanceado"
    }
}

let expr = "([{}])()"; // -->balanced
let string1 ="()()(()){}{[[]]}"  //--> balanced
let string2 = ""   // --> balanced
let string3 ="{}"  // -- >balanced
let string4 = "{{{{{(((((())))))}}}}}"   //--> balanced

let string5 = "(){}[" //-> not balanced
let string6 = ")(" //--> not balanced
let string7 = "{{" //-> not balanced
let string8 = "([]"  //--> not balanced
let string9 = "[{]"  //--> not balanced

console.log(areBracketsBalanced(expr),
        areBracketsBalanced(string1),
        areBracketsBalanced(string2),
        areBracketsBalanced(string4)
        )

console.log(areBracketsBalanced(string5),
        areBracketsBalanced(string6),
        areBracketsBalanced(string7),
        areBracketsBalanced(string8),
        areBracketsBalanced(string9))

