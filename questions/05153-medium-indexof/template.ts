// check if types identical, instead of assignable
type IfEquals<T, U> =
    // function signature is like: () => 1|2, only when G extends T && G extends U both are true(meaning T and G are exactly the same),
    // then IfEquals returns true
    (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2) ? true : false

// type param can have default type value (so it's optional)
type IndexOf<T extends any[], U, Acc extends any[] = []> =
    // this fails when 1 extends number, we want to check if types identical, instead of assignable
    // T[0] extends U
    IfEquals<T[0], U> extends true
      ? Acc['length']
      : T extends [infer F, ...infer Rest] ? IndexOf<Rest, U, [...Acc, F]> : -1

type t1 = IndexOf<[string, 1, number, 'a'], number>
type t2 = IndexOf<[1, 2, 3], 2>

type t3 = 1 extends number ? true : false // true
type t4 = number extends 1 ? true : false // false
