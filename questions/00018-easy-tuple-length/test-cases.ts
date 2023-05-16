import type {Equal, Expect, NotEqual} from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const
const Fruits = ['cherry', 'banana'] as const
const Fruits2 = ['cherry2', 'banana2']

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  Expect<Equal<Length<[1, 2, 3]>, 3>>,
  Expect<NotEqual<Length<[1, 2, 3]>, 2>>,
  Expect<Equal<Length<typeof Fruits>, 2>>,
  Expect<Equal<Length<[]>, 0>>,
  Length<5>,
  Length<'hello world'>,
]

const l3: Length<[number, number, boolean]> // const l3: 3, l3 is a literal number: 3, very specific number

console.log(typeof tesla) // readonly ['tesla', 'model 3', 'model X', 'model Y']
console.log(typeof Fruits2) // string[], it's just array of string, it can have 0 OR more elements, too wide.
