/**
 * This TypeScript code defines a type alias called `EndsWith`, which checks if a given string `A` ends with another string `B`.
 * It uses TypeScript's template literal types and conditional types to achieve this.
 *
 * Let's break down the code:
 *
 * 1. `A extends string, B extends string`: This part defines two generic type parameters, `A` and `B`,
 * both of which must extend the `string` type. This means that `A` and `B` must be strings.
 *
 * 2. `A extends `${any}${B}``: This part checks if the string `A` can be represented as a concatenation of any string (`${any}`) followed by the string `B`.
 * The `${any}` part is a placeholder for any string, and `${B}` represents the string `B`. The backticks (``) are used to define a template literal type,
 * which allows us to concatenate and manipulate string types.
 *
 * 3. `? true : false`: This is a conditional type. If the condition `A extends `${any}${B}`` is true, the `EndsWith` type will resolve to `true`,
 * otherwise, it will resolve to `false`.
 *
 * In summary, the `EndsWith` type checks if the string `A` ends with the string `B` by verifying if `A` can be represented as a concatenation of any string followed by `B`.
 * If this condition is true, the `EndsWith` type resolves to `true`, otherwise, it resolves to `false`.
 */
type EndsWith<A extends string, B extends string> = A extends `${any}${B}` ? true : false
// use `${string}` also works, meaning all possible strings.
// type EndsWith<A extends string, B extends string> = A extends `${string}${B}` ? true : false

