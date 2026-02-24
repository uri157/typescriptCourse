/*
Dado un string s, encontrá la longitud de la substring más larga que no repite caracteres.

    Ejemplos:

    s = "abcabcbb" → 3 ( "abc" )

    s = "bbbbb" → 1 ( "b" )

    s = "pwwkew" → 3 ( "wke" )

    s = "" → 0

    Restricciones típicas:

    0 <= s.length <= 10^5

    Reglas

    Tiempo: O(n) (una pasada)

    Espacio: O(min(n, alfabeto))
*/




function longestSubString(s:string):number{
    let left = 0;
    let right = 0;
    let best = 0;

    let set = new Set<string>();

    for(let right = 0; right < s.length; right++){
        let ch=s[right];
        while(set.has(ch)){
            set.delete(s[left]);
            left++;
        }

        set.add(ch);
        best= Math.max(best, right - left + 1);
    }

    return best;
}