# CHEATSHEET

## Basis

 - Created to “make web pages alive
 - IDE - Integrated Development Environment - VS code
 - Lightweight editors - not as powerful as IDE - Notepad++
 - External: `<script src="...>`
 - Authomatic semicolon insertion - interprets the line break   


## Browser Engines

- V8: Used by Chrome, Opera, and Edge
- SpiderMonkey: Used by Firefox

## Variables

- `var`: function-scoped.
- `let`: block-scoped.
- `const`: block-scoped cannot be changed once assigned

- The first character of a variable name cannot be a digit
- camelCase.
- After ECMAScript 5 -> `"use strict"` at the top of every page

## Data Types

- `NaN`: computational error from incorrect mathematical operation
- `Boolean`: either `true` or `false`.
- `Undefined`: a variable that has been declared but has no assigned value
- `BigInt`: `number`n
- `Null`: unknown value or absence of a value
- `Symbol`: unique identifiers
- `Object`: a complex data structure

## Quotes

- Simple Quotes:
  - Double quotes (`""`) represent strings
  - Single quotes (`''`) represent strings or single letters

- Extended Functionality:
  - Backticks (`` ` ``) allow embedding variables and expressions into a string using `${...}`.

## Interaction with the User

- `alert`: Displays a modal window with a text message and an OK button. Example: `alert("Hello, world!");`
- `prompt`: Displays a modal window with a text message, an input field, and OK/Cancel buttons. Example: `let result = prompt("Enter your name", "John");`
- `confirm`: Displays a modal window with a question and OK/Cancel buttons. Example: `let question = confirm("Are you sure?");`

## Type Conversions

- `Number()`: Converts a value to a number
- `String()`: Converts a value to a string
- `Boolean()`: Converts a value to a boolean

- A non-empty string or a space is considered `true`
- Use `Number()`, `String()`, and `Boolean()` functions for explicit type conversions

## Operators
  - operand - what operators are applied to
  - Unary Operator: Operators that work on a single operand, such as negation (`-x`).
  - Binary Operator: Operators that work on two operands, such as subtraction (`y - x`)
  - Remainder Operator (%): Devidend = divisor * quotient + remainder (`8 = 3 * 2 + 2`)

- `"help" + "me" = "helpme"`
- `'1' + 2 = 12`
- `2 + '1' = 21`
- `2 + 2 + '1' = 41`
- `'1' + 2 + 2 = 122`
- `'2' - 1 = 1`
- `'10' / '5' = 2`

 - `a = '1, b = '2'`
 - `a + b = 12`
 - `+a +b = 3`

- and &, or |, xor ^, not ~, left shift <<, right shift >>, zero-fill right shift >>>
 - Comma - result of last one returns (`a = (1 + 2, 3 + 4) -> a = 3 + 4 = 7`)

## Comparisons
 - Equalty == - checks with type conversion
 - Strict equalty === - checks without type conversion
 - ! null === undefined -> false, but null == undefined -> true !

 - `null > 0 //false`
 - `null == 0 //false`
 - `null >= 0 //true`
 - `undefined > 0 //false`
 - `undefined < 0 //false`
 - `undefined == 0 //false`
- ! let result = confition ? value1 : value2 ! - value1 = true value2 = false

## Nulish Operator
 - ?? - a ?? b -> if a is defined -> a else -> b

 ## Functions
 - `function name(parameter1..parameterN) { //body }`
  - Local variables: Variables declared inside a function
   - Outer variables: Variables outside a function
    - Function starting with:
        - "get…" – return a value,
        - "calc…" – calculate something,
        - "create…" – create something,
        - "check…" – check something and return a boolean, etc.
    - Logical not: `if(!(...))`