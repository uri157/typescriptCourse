# TypeScript Course Transcription

## Capítulo 2: Functions

> Nota: en la transcripción original no aparece una sección `#3`; se conserva la numeración existente.

### Lección 1: Function Type Syntax

One of the most useful places for explicit types is in function signatures.

Example with a function declaration:

```ts
function createMessage(name: string, a: number, b: number): string {
  return `${name} scored ${a + b}`;
}
```

The `: type` after each parameter sets the parameter type, and the `: type` after the parameter list sets the return type.

Same idea with arrow functions:

```ts
const createMessage = (name: string, a: number, b: number): string => {
  return `${name} scored ${a + b}`;
};
```

**Assignment**

We need to calculate discounts for Support.ai customers.
Run the function as-is and notice that `tsc` reports compile-time errors.

Fix `calculateTotal` so it accepts:

1. `price`: base price (`number`)
2. `quantity`: number of purchased support chats (`number`)
3. `discount`: discount percentage (`number`, e.g. `0.1` for 10%)

Return the final total (`number`) after discount.

```ts
export function calculateTotal(
  price: number,
  quantity: number,
  discount: number,
): number {
  return price * quantity * (1 - discount);
}
```

---

### Lección 2: Inferred Return Types

Just like this is preferred:

```ts
const myPowerLevel = 9000;
```

over this:

```ts
const myPowerLevel: number = 9000;
```

A similar idea can apply to function return types.

Instead of this:

```ts
function divide(a: number, b: number): number {
  return a / b;
}
```

you can write:

```ts
function divide(a: number, b: number) {
  return a / b;
}
```

TypeScript infers the return type as `number`.

```ts
export function combinePrompts(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n${userPrompt}`;
}
```

---

### Lección 4: Void

The TypeScript-specific `void` type represents functions that do not return a value.

```ts
function logMessage(message: string): void {
  console.log(message);
  // nothing is returned here
}
```

In JavaScript, a function without `return` implicitly returns `undefined`, but `void` communicates the intent more clearly.

**Assignment**

`logSystemEvent` currently returns `void`, but at Support.ai we want to do more than console logging.
Update it to return the log as a `string`.

```ts
export function logSystemEvent(
  event: string,
  severity: "info" | "warning" | "error"
): string {
  return `SYSTEM ${severity.toUpperCase()}: ${event}`;
}
```

---

### Lección 5: Type Alias

Long custom function types can become hard to read and maintain.

Example without alias:

```ts
function setLoggerTimeout(
  loggerCallback: (s1: string, s2: string) => string,
  delay: number,
) {
  // do something
}
```

Create a type alias with `type`:

```ts
type LoggerCallback = (s1: string, s2: string) => string;
```

Then reuse it:

```ts
function setLoggerTimeout(loggerCallback: LoggerCallback, delay: number) {
  // do something
}
```

This is easier to read, reusable, and safer to maintain.

**Assignment**

Support.ai's code style guide requires clear function typing for higher-order usage.

1. Create and export a `SupportResponse` type that takes a `string` (`name`) and returns a `string`.
2. Update `greetCustomer` so its signature conforms to `SupportResponse`.
3. Do the same for `farewellCustomer`.

You do not need to explicitly reuse the alias in every declaration as long as the signatures conform.

```ts
export const greetCustomer: SupportResponse = (name) => {
  return `Hello ${name}, welcome to Support.ai! How can I assist you today?`;
};

export const farewellCustomer: SupportResponse = (name) => {
  return `Goodbye ${name}, have a great day!`;
};

export type SupportResponse = (name: string) => string;
```

---

### Lección 6: Importing Types

With certain TypeScript configurations, you can import types like this:

```ts
import { User, Post } from "./models";
```

But it is safer and often more efficient to use `import type`:

```ts
import type { User, Post } from "./models";
```

This makes it explicit that you're importing only types, allowing TypeScript to erase those imports from generated JavaScript when appropriate.

This syntax also works:

```ts
import { type User, type Post } from "./models";
```

Prompt from the source material:

**Importing types with `import type` syntax reduces bundle size: true or false?**
