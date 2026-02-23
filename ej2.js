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
function isValid(s) {
    s.split("");
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (s[i + 1] !== ")")
                return false;
        }
        else if (s[i] === "{") {
            if (s[i + 1] !== "}")
                return false;
        }
        else if (s[i] === "[") {
            if (s[i + 1] !== "]")
                return false;
        }
    }
    return true;
}
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("]"));
