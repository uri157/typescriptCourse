TYPESCRYPT COURSE TRANSCRIPTION

## Chapter 1, TYPES

#1
Assignment

The whole point of TypeScript is to add static typing to JavaScript, notice the : string annotation on the bootupMessage variable? That's telling TypeScript, "hey, the thing that follows is a string".

Update the code to print Starting support.ai servers... to the console.

Capitalization and punctuation matter.

const bootupMessage: string = "Starting support.ai servers...";
console.log(bootupMessage);


#2 Basic Types

As you saw in the last lesson, TypeScript has static types! This TypeScript code:

const bootupMessage: string = "Starting support.ai servers...";

Is the equivalent of this JavaScript code:

const bootupMessage = "Starting support.ai servers...";

The : string annotation is the variable type. This also works for the other primitive types like number, boolean, null, and undefined:

const bootupMessage: string = "Starting support.ai servers...";
const port: number = 3000;
const isServerOnline: boolean = true;
const noValue: null = null;
const notDefined: undefined = undefined;

If a value doesn't match a type, TypeScript will throw an error when it compiles. For example, this is a no-no:

const bootupMessage: string = 123;
// Error: Type 'number' is not assignable to type 'string'.

Assignment

We have a compilation bug!

Fix the type of the supportAiLogs variable so that the TypeScript compiler doesn't throw an error, and prints the logs to the console.


const supportAiLogs: string = "CRITICAL: Boots cut the power cord again";
console.log(supportAiLogs);



#3 Type Inference

If your words-per-minute are as pitiful as mine, you'll agree when I say "typing sucks".

And objectively, this:

const bootupLog: string = "Starting support.ai servers...";

is more typing than this:

const bootupLog = "Starting support.ai servers...";

The good news is that TypeScript is incredible at type inference. Instead of explicitly declaring the type of a variable, TypeScript will infer it based on the value. So in reality, you should never write:

const bootupLog: string = "Starting support.ai servers...";

just write:

const bootupLog = "Starting support.ai servers...";

Its just as safe (in fact, safer because you can't screw it up) and much less typing.
Assignment

Fix the type error by removing the (incorrect) explicit type declaration.

const supportAiLogs = "WARNING: The break fridge smells like salmon";
console.log(supportAiLogs);

#4 What Is TypeScript

TypeScript is a language, but the official implementation of TypeScript is the TypeScript compiler, tsc. Its job is simple: take TypeScript code, ensure it's valid, and then compile it into JavaScript code.

The compiler, tsc, has been written in TypeScript for a long time, but very recently, the TypeScript team has started a port to Golang! They've reported compilation speed improvements of ~10x, and I'm super excited about it.

TypeScript is not supported natively by most JavaScript engines, so it needs to be compiled into equivalent JavaScript code before it can be run. This interesting fact, that TypeScript code is only type-checked before it's run, has led to an interesting philosophical question:

    Is TypeScript basically just a really good linter?

And honestly... yeah, I think so. I get it, technically it does a lot more than your standard linter, but from a practical perspective, its primary benefit is to do static analysis on your almost-JavaScript code and catch bugs before they happen.
Compiled to... JavaScript?

TypeScript is interesting in that it's "compiled", but not in the traditional (compiled to binary) sense. Instead, it's compiled to JavaScript. So it's not really compiled for performance reasons, but rather for compatibility reasons.

The goal of TypeScript is to write JavaScript code that's easier to work with.
Compilation Errors

So, in this course, if your code fails to compile, you'll get an error like this:

tsc:
Type 'string' is not assignable to type 'number'.

Only if the compilation is successful, then we run the code. So your code needs to pass compilation, and needs to run correctly.
Assignment

Run the code as-is. You should see a compilation error from tsc.

Fix the compilation error by changing the value of supportAiPort to the number 3000.

const supportAiPort: number = 3000;
console.log(`Starting server on port ${supportAiPort}...`);
console.log(`The type of supportAiPort is ${typeof supportAiPort}`);


#5 Any

Okay, so we know TypeScript's purpose is to add static types to JavaScript, and we know all JavaScript is valid TypeScript.

In practical terms, what that means is when you compile plain JavaScript code using tsc, your codebase is full of any types.

The any type is exactly what it sounds like - a type that can be anything. The purpose of types, really, is to narrow down the possible values that a variable can hold. From that perspective, any is the most useless type because it doesn't narrow anything down at all! But it's important because it allows you to opt out of type-checking for a variable.

The any type is super useful when you migrate an existing JavaScript codebase to TypeScript. The (very simplified) process is:

    Change file extensions from .js to .ts
    Get tsc running without errors (often works out of the box, due to any)
    Slowly over time, replace any's with more specific types

Boot.dev's front-end used to be JavaScript! We went through this exact process a couple of years ago getting it all converted to TypeScript and slowly purging the any's.
Assignment

While vibe migrating a JavaScript file to TypeScript, a bunch of any's were inserted into the codebase.

Update the constants from any to their proper types (by using inference).


export const systemPrompt =
  "Your purpose is to help the customer by any means necessary. Unless it's costing us too much money. Then just tell them you're an LLM and can't do that task.";
export const tokenLimit = 1000;
export const hasAdminAccess = true;



#Chapter 2 Functions

#1 Function Type Syntax

One of the most useful places for explicit types is in function signatures. For example:

function createMessage(name: string, a: number, b: number): string {
  return `${name} scored ${a + b}`;
}

The : type after each parameter specifies that parameter's type, and the : type after all the parameters specifies the return type. It works the same way with arrow functions:

const createMessage = (name: string, a: number, b: number): string => {
  return `${name} scored ${a + b}`;
};

Assignment

We need to calculate discounts for Support.ai customers. Run the function as-is, and notice that tsc is showing us some compile-time errors.

Fix the calculateTotal function by using the proper types. It should accept three parameters:

    price: a number representing the base price
    quantity: a number representing how many support chats they've purchased
    discount: a number representing discount percentage (e.g., 0.1 for 10%)

Then return the total price (a number) after applying the discount.


export function calculateTotal(
  price: number,
  quantity: number,
  discount: number,
): number {
  return price * quantity * (1 - discount);
}

#2 Inferred Return Types

So you know how we discussed that:

const myPowerLevel = 9000;

Is better TypeScript than:

const myPowerLevel: number = 9000;

What follows is a bit of personal opinion, but I think the same is generally true for function return (not parameter) types.

Instead of this:

function divide(a: number, b: number): number {
  return a / b;
}

We can write this:

function divide(a: number, b: number) {
  return a / b;
}

And TypeScript infers the output type as number.

export function combinePrompts(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n${userPrompt}`;
}



#4 Void

The TS-specific void type represents the return value of functions that don't return a value.

function logMessage(message: string): void {
  console.log(message);
  // nothing is returned here!
}

In JavaScript, a function without a return statement returns undefined by default... but that's kinda vague. TypeScript uses the void keyword to indicate that truly nothing is returned.

In other words, void more explicitly communicates the intent that a function returns nothing.
Assignment

Hover the logSystemEvent function to see that it returns void. The problem is, at Support.ai, we don't want to simply log our logs to the console, we want to do other things, like store them in a remote database.

Update the logSystemEvent function to return the log as a string instead of logging it to the console.

export function logSystemEvent(event: string, 
  severity: "info" | "warning" | "error"
): string {
  return `SYSTEM ${severity.toUpperCase()}: ${event}`;
}



#5 Type Alias

It can get really cumbersome to write out long custom types whenever you want to use them. For example, maybe we have a function that accepts another function as input. Let's use a totally make-believe example, something that sets a timeout:

function setLoggerTimeout(
  loggerCallback: (s1: string, s2: string) => string,
  delay: number,
) {
  // do something
}

That's a nasty function signature... let's use the type keyword instead to create a type alias:

type LoggerCallback = (s1: string, s2: string) => string;

Now anytime we need to use this specific kind of function (one that accepts two strings and returns a string), we can just use LoggerCallback:

function setLoggerTimeout(loggerCallback: LoggerCallback, delay: number) {
  // do something
}

Muuuuuch better! It's easy to read and reusable! Why is that important? It's less prone to copying errors as we use in other places in our code. And in the future, if we want to change it, we only have to modify the type declaration rather than everywhere it's used.
Assignment

Support.ai's internal code style guide requires functions to be clearly typed when used as higher-order functions.

    Create and export a new SupportResponse function type that takes a string (name) and returns a string.
    Update the greetCustomer function so its signature conforms to SupportResponse.
        Takes a single string parameter (name)
        Returns a string
    Do the same for farewellCustomer.
        Takes a single string parameter (name)
        Returns a string

You don't need to explicitly use the alias in your function declarations — as long as the signature matches, the function "conforms to" the type. The tests will import and use your SupportResponse type to verify that your functions have the correct signature.

// ?

export const greetCustomer: SupportResponse = (name) =>  {
  return `Hello ${name}, welcome to Support.ai! How can I assist you today?`;
}

export const farewellCustomer: SupportResponse = (name) => {
  return `Goodbye ${name}, have a great day!`;
}


export type SupportResponse = (name: string) => string;



#6 Importing Types

With certain TypeScript configurations you can import types directly from a module:

import { User, Post } from "./models";

But it's much safer and more efficient to use the import type syntax:

import type { User, Post } from "./models";

This way TypeScript knows that you're only importing types, and it can drop the imports so they don't generate extra JavaScript code when your project is compiled. This syntax also works:

import { type User, type Post } from "./models";

But personally I prefer the first one. It's more concise and keeps all my type imports in one place.

Importing types with the import type syntax reduces bundle size.
true or false?



