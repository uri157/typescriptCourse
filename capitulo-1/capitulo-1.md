# TypeScript Course Transcription

## Capítulo 1: Types

### Lección 1: Assignment

The whole point of TypeScript is to add static typing to JavaScript. Notice the `: string` annotation on the `bootupMessage` variable: that tells TypeScript that the value must be a string.

**Task:**
Update the code to print `Starting support.ai servers...` to the console.

> Capitalization and punctuation matter.

```ts
const bootupMessage: string = "Starting support.ai servers...";
console.log(bootupMessage);
```

---

### Lección 2: Basic Types

As you saw in the last lesson, TypeScript has static types.

This TypeScript code:

```ts
const bootupMessage: string = "Starting support.ai servers...";
```

Is equivalent to this JavaScript code:

```ts
const bootupMessage = "Starting support.ai servers...";
```

The `: string` annotation is the variable type. This works for other primitive types as well, like `number`, `boolean`, `null`, and `undefined`:

```ts
const bootupMessage: string = "Starting support.ai servers...";
const port: number = 3000;
const isServerOnline: boolean = true;
const noValue: null = null;
const notDefined: undefined = undefined;
```

If a value doesn't match a type, TypeScript throws an error at compile time:

```ts
const bootupMessage: string = 123;
// Error: Type 'number' is not assignable to type 'string'.
```

**Assignment**

We have a compilation bug.
Fix the type of `supportAiLogs` so the compiler doesn't fail, and print the logs to the console.

```ts
const supportAiLogs: string = "CRITICAL: Boots cut the power cord again";
console.log(supportAiLogs);
```

---

### Lección 3: Type Inference

If your words-per-minute are as pitiful as mine, you'll agree when I say: typing sucks.

Objectively, this:

```ts
const bootupLog: string = "Starting support.ai servers...";
```

is more typing than this:

```ts
const bootupLog = "Starting support.ai servers...";
```

The good news is that TypeScript is excellent at type inference. Instead of explicitly declaring a variable type, TypeScript can infer it from the assigned value.

So instead of writing:

```ts
const bootupLog: string = "Starting support.ai servers...";
```

you can write:

```ts
const bootupLog = "Starting support.ai servers...";
```

It's just as safe (arguably safer, because you can't mis-declare the type) and requires less typing.

**Assignment**

Fix the type error by removing the incorrect explicit type declaration.

```ts
const supportAiLogs = "WARNING: The break fridge smells like salmon";
console.log(supportAiLogs);
```

---

### Lección 4: What Is TypeScript

TypeScript is a language, and its official implementation is the TypeScript compiler: `tsc`.

Its job is simple:
1. Take TypeScript code.
2. Ensure it is valid.
3. Compile it into JavaScript.

The compiler has been written in TypeScript for a long time, and the team recently started a port to Golang, reporting compilation speed improvements of around 10x.

TypeScript is not natively supported by most JavaScript engines, so it must be compiled into equivalent JavaScript before execution.

That leads to an interesting question:

> Is TypeScript basically just a really good linter?

From a practical perspective, a large part of its value is static analysis: catching bugs before runtime.

#### Compiled to JavaScript

TypeScript is "compiled", but not to binary. It compiles to JavaScript.

So the main goal isn't raw performance; it's compatibility and a better developer experience.

#### Compilation Errors

If code fails to compile, you'll get an error like this:

```txt
tsc:
Type 'string' is not assignable to type 'number'.
```

Only after successful compilation should code run.

**Assignment**

Run the code as-is and observe the compilation error.
Then fix it by changing `supportAiPort` to the number `3000`.

```ts
const supportAiPort: number = 3000;
console.log(`Starting server on port ${supportAiPort}...`);
console.log(`The type of supportAiPort is ${typeof supportAiPort}`);
```

---

### Lección 5: Any

We know TypeScript adds static types to JavaScript, and all JavaScript is valid TypeScript.

In practice, compiling plain JavaScript with `tsc` often means you start with many `any` types.

The `any` type can hold anything. Since types are meant to narrow values, `any` is the least restrictive option. It's useful when you need to opt out of type-checking temporarily.

This is especially useful when migrating a JavaScript codebase to TypeScript:

1. Change file extensions from `.js` to `.ts`.
2. Get `tsc` running without errors (often possible due to `any`).
3. Gradually replace `any` with specific types.

**Assignment**

While migrating a JavaScript file to TypeScript, several `any` annotations were inserted.
Update the constants to their proper types (using inference).

```ts
export const systemPrompt =
  "Your purpose is to help the customer by any means necessary. Unless it's costing us too much money. Then just tell them you're an LLM and can't do that task.";
export const tokenLimit = 1000;
export const hasAdminAccess = true;
```
