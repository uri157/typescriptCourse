/*
Ejercicio 1 — Two Sum (calentamiento con Map)

Enunciado:
Dado un array de números nums y un target, devolvé los índices de dos elementos que sumen target.
Podés asumir que hay una sola solución, y no podés usar el mismo elemento dos veces.

Ejemplos:

nums = [2,7,11,15], target = 9 → [0,1]

nums = [3,2,4], target = 6 → [1,2]

nums = [3,3], target = 6 → [0,1]

Restricciones típicas:

2 <= nums.length <= 10^4

-10^9 <= nums[i], target <= 10^9

Reglas para tu solución

Tiempo esperado: O(n)

Espacio: O(n) (con Map)
*/



const nums: number[] = [2,7,11,15];
const target: number = 9;

function TwoSum(data:number[],target:number):[number,number]{
    let seen: Map<number,number> = new Map<number,number>();

    for (let i = 0 ; i<data.length ; i++ ){
        const need: number = target - data[i];
        const j = seen.get(need);
        if (j !== undefined){
            return [j,i];
        }

        seen.set(data[i],i);
    }

    throw new Error ("No solutions");
}


console.log(TwoSum(nums,target));
