// we accept arrays, even readonly arrays (more specific, a special type of array)
type Length<T> = T extends readonly any[] ? T['length'] : never
