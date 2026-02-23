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



function lengthOfLongestSubstring(s: string): number {
    const lastIndex = new Map<string, number>(); // char -> último índice visto
    let left = 0;
    let best = 0;
  
    for (let right = 0; right < s.length; right++) {
      const ch = s[right];
      const prev = lastIndex.get(ch);
  
      if (prev !== undefined && prev >= left) {
        left = prev + 1; // saltás el repetido dentro de la ventana
      }
  
      lastIndex.set(ch, right);
      best = Math.max(best, right - left + 1);
    }
  
    return best;
  }