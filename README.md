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
 - Unicode comparison: `a = 2, b = 13 -> a > b -> '2' > '1', '3' - > true`
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
        - `get…` – return a value,
        - `calc…` – calculate something,
        - `create…` – create something,
        - `check…` – check something and return a boolean, etc.
    - Logical not: `if(!(...))`

## Arrow functions
 - `let func = (parameter1..parameterN) => { body; }`
 - Anonymus arrow function: `let func = () => { body }`

## Objects
 - Empty object: `let user = new.Object() or let user = {};`
  - `let user = {`
  ` name : "Bob", `
  ` age: 99`
  `};`
  - Accessible witha dot: `user.name`
   - Remove object: `delete user.age;`
   - In operator: `key in object`
        - `let user = { name: "John", age: 69 }; alert("age" in user) // true bc user.age exsists`

## Arrays
  - Declaration: `let arr = []`
  - Length: `arr.length`
  - Get last element: `arr.at(-1);`
  - Methods:
     -  `push` - adds an elelemnt to the end
     - `shift` - deletes 1st element
     - `unshift` - adds element to the front
     - `pop` - takes an element from the end
     - `splice` - removes element at index but doesnt change arrays length
     - `slice` - copies elements from index to index
     - `concat` - creates new array and adds aditional items
     - `forEach` - run function for eveyr elemnt of the array
     - `indexOf` - returns the index of an exactc elemnt of the array
     - `includes` - returns rather the array has specific element or not

## Strings
- `\n`: New line
- `\r`: In Windows text files, a combination of two characters `\r\n` represents a line break, while on non-Windows OS it's just `\n`. That's for historical reasons, but most Windows software also understands `\n`.
- `\'`, `\"`, `\``: Quotes
- `\\`: Backslash
- `\t`: Tab
- `str.at(0)` - first element of a string
- `str.at(-1)` - last element of a string
- `toUpperCase()` `toLowerCase`
- `startsWith("")` `edsWith("");`

## DOM
 - DoOM: document object model
 - `document.body.style.background`
 - 

## Key Terms
 - callback - A callback is a response to an event, such as a script execution in response to a mouse click
 - dynamic application - A dynamic application is one that adjusts and responds to end particular users or user actions
 - event handler - An event handler is an optional script or executable that handles input received in a program. Handlers are JavaScript code inside the `<html>` tags `(rather than the <script> tags)` that execute other JavaScript code in response to an event
 - events - An event is an action that triggers another action to occur
 - function - A function is a segment of a program defined and performed in isolation from other parts
 - identifier - An identifier is the name of a variable or function. Identifiers cannot be the same as words already used in the language; for example, “if ” has a special meaning in JavaScript statements and is not available as a variable name
 - interactivity - Interactivity enables an end user to take an action in an application, usually by clicking a button or pressing a key
 - jQuery - jQuery is the leading JavaScript library
 - methods - Methods are JavaScript functions that belong to objects. Methods differ from functions only in that methods are always associated and used with a particular object
 - subroutines - A subroutine is a function that returns no value
 - validation - Validation is the process of verifying that information entered or captured is in the correct format
 - variable - A variable is a symbolic abbreviation, or name, that stands for a piece of data

 - ECMAScript - a general programming language, standardized by Ecma International according to the document ECMA-262. It is a JavaScript standard meant to ensure the interoperability of Web pages across different Web browsers
 - MDN (Mozilla) JavaScript Reference -  a manual with examples and other information. It’s great to get in-depth information about individual language functions, methods etc
 - MSDN - Microsoft manual with a lot of information, including JavaScript (often referred to as JScript). If one needs something specific to Internet Explorer

