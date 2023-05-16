// we accept arrays, even readonly arrays (more specific)
type Length<T> = T extends readonly any[] ? T['length'] : never
