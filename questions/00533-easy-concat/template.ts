// Generic types like variable, when actually use the type, they will be "assigned" with
// actual values, so can use the operator like destructure: `...`
type Concat<A extends any[], B extends any[]> = [...A, ...B]
