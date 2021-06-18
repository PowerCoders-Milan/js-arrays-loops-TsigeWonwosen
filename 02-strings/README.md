# strings

A string in javascript is a set of character. Each one of them is occupyng a specific position in the string. 

`let string = 'hello'`

| h | e | l | l | o |
|---|---|---|---|---|
| 0 | 1 | 2 | 3 | 4 |

we can treat strings like arrays.
For example, if I want to access the first letter of a string I can do `string[0]`

## instructions
1. declare a variable `myString` and assign a string value to it
2. declare a new variable named `stringArray` with `let`
3. assign to `stringArray` a value using the [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) `.split()` on the string
4. revert `stringArray` with the [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) `.reverse()`
5. transform `stringArray` into `string` with `.join()` [method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
5. `console.log()` the new string