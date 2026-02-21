# Ejercicios Tipo LeetCode - Capítulo 1 (Types)

Lista corta y enfocada para practicar tipos básicos, inferencia y eliminación de `any`.

## 1) Validate Bootup Message (Easy)

  **Firma**

    ```ts
    export function validateBootupMessage(input: unknown): string
    ```

  **Enunciado**
  Recibís un valor desconocido. Devolvé el mensaje si es `string` no vacío (después de `trim`). Si no, lanzá `Error("Invalid bootup message")`.

  **Ejemplo**
  - `validateBootupMessage(" Starting support.ai servers... ")` -> `"Starting support.ai servers..."`
  - `validateBootupMessage(42)` -> error

  **Foco**
  - `unknown` vs `any`
  - Narrowing con `typeof`

  ---

## 2) Count Online Servers (Easy)

  **Firma**

    ```ts
    export function countOnlineServers(statuses: boolean[]): number
    ```

  **Enunciado**
    Dado un arreglo de estados (`true` online, `false` offline), devolvé cuántos servidores están online.

  **Ejemplo**
  - `[true, false, true, true]` -> `3`

  **Foco**
  - Tipo `boolean`
  - Retorno `number`

  ---

## 3) Sum Valid Ports (Easy)

  **Firma**

  ```ts
   export function sumValidPorts(ports: Array<number | null | undefined>): number
  ```

  **Enunciado**
  Sumá solo los puertos válidos (`1..65535`). Ignorá `null`, `undefined` y números fuera de rango.

  **Ejemplo**
  - `[80, 443, null, 70000, undefined, 3000]` -> `3523`

  **Foco**
  - Uniones (`number | null | undefined`)
  - Guards y validaciones

  ---

## 4) Parse Log Line (Medium)

**Firma**

```ts
  export type Severity = "INFO" | "WARNING" | "ERROR";

  export function parseLogLine(
    line: string,
  ): { severity: Severity; message: string } | null
  ```

  **Enunciado**
  Una línea tiene formato `"SEVERITY: mensaje"`. Si la severidad no es válida o falta mensaje, devolvé `null`.

  **Ejemplo**
  - `"ERROR: DB connection failed"` -> `{ severity: "ERROR", message: "DB connection failed" }`
  - `"TRACE: ping"` -> `null`

  **Foco**
  - String parsing
  - Literales de tipo (`"INFO" | ...`)

  ---

## 5) Replace Any in Metrics (Medium)

  **Firma**

  ```ts
  type MetricValue = number | boolean | string;

  export function normalizeMetrics(
    input: Record<string, MetricValue | null | undefined>,
  ): Record<string, MetricValue>
  ```

  **Enunciado**
  Recibís métricas con posibles valores nulos. Devolvé un objeto nuevo sin `null`/`undefined`:
  - `null` o `undefined` string -> `"N/A"`
  - `null` o `undefined` number -> `0`
  - `null` o `undefined` boolean -> `false`

  Si no podés inferir tipo original para un campo faltante, usá `"N/A"`.

  **Foco**
  - Diseño de tipos en vez de `any`
  - Manejo de valores faltantes

  ---

## 6) Strict Config Merge (Medium)

  **Firma**

  ```ts
  export type Environment = "dev" | "prod";

  export interface SystemConfig {
    port: number;
    debug: boolean;
    env: Environment;
  }

  export function mergeConfig(
    base: SystemConfig,
    override: Partial<SystemConfig>,
  ): SystemConfig
  ```

  **Enunciado**
  Combiná `base` y `override`. Validaciones:
  - `port` debe quedar en `1..65535`
  - `env` solo `"dev" | "prod"`

  Si el override trae algo inválido, lanzá error.

  **Foco**
  - Tipos explícitos e inferencia combinados
  - `Partial<T>` y chequeos de compilación
