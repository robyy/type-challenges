import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], ['hello']>, ['hello']>>,
  Expect<
      Equal<Concat<[18, 19], [20, 21]>, [18, 19, 20, 21]>
  >,
  Expect<
      Equal<
          Concat<[42, 'a', 'b'], [Promise<boolean>]>,
          [42, 'a', 'b', Promise<boolean>]
      >
  >,
]
