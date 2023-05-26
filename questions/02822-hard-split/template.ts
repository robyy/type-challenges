// https://github.com/type-challenges/type-challenges/issues/21338

// type Split<S extends string, SEP extends string> =
//     S extends `${infer L}${SEP}${infer R}` // first occurrence of SEP
//       ? [L, ...Split<R, SEP>]
//       : S extends '' ? []
//         : string extends S ? string[] : [S]

type Split<T extends string, U extends string> =
    string extends T
      ? string[]
      : T extends `${infer Left}${U}${infer Right}`
        ? [Left, ...Split<Right, U>]
        : U extends ''
          ? []
          : [T]

let x: Split<'Hi! How are you?', ' '>

let y: Split<'Hi! ', ''>

// if the type is S extends `${infer L}${SEP}${infer R}` ? [L, ...Split<R, SEP>] : [S]
// empty string can be considered an entity (it has unicode in Java), but it doesn't have Left or Right part(it's a single entity)
// so '' extends `${infer L}${SEP}${infer R}` is false (SEP is '')
// in below result, we can see the type is [""], so we know it's `: [S]` part doing wrong, just need to adjust it to
// check if the S is ''
let y2: Split<'', ''>

let z: Split<'', 'z'>

let u: Split<string, 'whatever'>

