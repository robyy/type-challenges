type IsTuple<T> = [T] extends [never] ? false : T extends readonly [] ? true :
    // array like any[] has 0 or more elements, so if it's empty array, T extends readonly [infer _Head, ...infer _Tail] is false
    (T extends readonly [infer _Head, ...infer _Tail] ? true : false)

// for some reasone, T extends never ? false : doesn't work.
type IsTuple2<T> = [T] extends [never] ? false :
  T extends readonly any[]
  // push one item to T, if it's array, the length is still undetermined / infinite,
  // if T is tupple, then the length definitely not equal to original tuple (+1)
    ? ([...T, any]['length'] extends T['length'] ? false : true)
    : false // not even an array-ish thing

type A = IsTuple2<never>
