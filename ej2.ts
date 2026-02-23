/*
Ejercicio 2 — Valid Parentheses (Stack)
    Enunciado:
    Dado un string s que contiene solo estos caracteres: ( ) { } [ ], determiná si es válido.
    Un string es válido si:
    Cada apertura tiene su cierre correcto.

    Los cierres respetan el orden (tipo “último que entra, primero que sale”).

    Ejemplos:

    s = "()" → true

    s = "()[]{}" → true

    s = "(]" → false

    s = "([)]" → false

    s = "{[]}" → true

    s = "]" → false

    Restricciones típicas:
    1 <= s.length <= 10^4
*/


function isValid(s:string):boolean{
    let valid: Map<String, String> = new Map([[')','('],[']','['],['}','{']]);
    let stack: string[] = [];

    for(let c of s){
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c);
        }
        else{
                if(c === ')' || c === '[' || c == '{'){
                        let expected = valid.has(c);
                        if(typeof(expected) === )asdasd       
                }ifsad
    }

    return s.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("]"));