# Ejercicios Tipo LeetCode - Capítulo 2 (Functions)

Lista corta y enfocada para practicar firmas de funciones, retorno inferido, `void`, type alias e imports de tipos.

## 1) Compose Two Functions (Easy)

**Firma**

```ts
export function composeTwo(
  f: (x: number) => number,
  g: (x: number) => number,
): (x: number) => number
```

**Enunciado**
Devolvé una función que aplique `g` y luego `f`.

**Ejemplo**
- `f(x)=x+1`, `g(x)=x*2`, `composeTwo(f,g)(3)` -> `7`

**Foco**
- Tipado de parámetros y retorno en funciones de orden superior

---

## 2) Map With Index (Easy)

**Firma**

```ts
export function mapWithIndex<T, U>(
  arr: T[],
  fn: (value: T, index: number) => U,
): U[]
```

**Enunciado**
Implementá una versión tipada de `map` que además pase índice.

**Ejemplo**
- `mapWithIndex([10,20], (v,i) => `${i}:${v}`)` -> `["0:10", "1:20"]`

**Foco**
- Genéricos y firmas de callback

---

## 3) Run Once Wrapper (Easy)

**Firma**

```ts
export function once<T extends (...args: never[]) => unknown>(fn: T): T
```

**Enunciado**
Devolvé una función que ejecute `fn` solo la primera vez. En llamadas posteriores, devolvé el primer resultado cacheado.

**Foco**
- Preservar firma de función con genéricos
- Diferencia entre implementación y tipo de retorno

---

## 4) Log Builder (Medium)

**Firma**

```ts
export type Severity = "info" | "warning" | "error";

export function buildLog(event: string, severity: Severity): string
```

**Enunciado**
En vez de imprimir por consola (`void`), devolvé el string formateado:
`SYSTEM ${severity.toUpperCase()}: ${event}`.

**Ejemplo**
- `buildLog("Disk full", "error")` -> `"SYSTEM ERROR: Disk full"`

**Foco**
- Retorno `string` en lugar de `void`
- Uniones de literales

---

## 5) Customer Message Alias (Medium)

**Firma**

```ts
export type SupportResponse = (name: string) => string;

export const greetCustomer: SupportResponse
export const farewellCustomer: SupportResponse
export const escalateCustomer: SupportResponse
```

**Enunciado**
Definí `SupportResponse` y hacé que las tres funciones conformen exactamente esa firma.

**Foco**
- Type alias para firmas reutilizables
- Consistencia en funciones del mismo contrato

---

## 6) Type-Only Import Challenge (Medium)

**Archivos requeridos**
- `models.ts`
- `formatter.ts`

**Enunciado**
1. En `models.ts`, exportá:
   - `export type User = { id: number; name: string }`
   - `export type Ticket = { id: number; title: string; ownerId: number }`
2. En `formatter.ts`, importá solo tipos usando `import type`.
3. Implementá:

```ts
export function formatTicketOwner(
  users: User[],
  ticket: Ticket,
): string
```

Debe devolver `"<ticket.title> -> <owner.name>"` o `"<ticket.title> -> Unknown"`.

**Foco**
- `import type` correcto
- Separación entre tipos y valores en módulos
