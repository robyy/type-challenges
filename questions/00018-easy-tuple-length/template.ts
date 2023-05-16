// writable/regular arrays is a subset of readonly array !
// so readonly any[] is wider, more general, a more basic class than any[] (writable/regular array)
// so all regular arrays can be treated as readonly arrays, BUT
// readonly arrays CAN'T always be treated as writable arrays.
type Length<T> = T extends readonly any[] ? T['length'] : never
