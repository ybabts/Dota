export type ValueUnion<T> = T[keyof T];
export type KeyUnion<T> = keyof T;
export type ValueObjectKeyUnion<T, P extends keyof T[keyof T]> = {
  [K in keyof T]: T[K] extends { [key in P]: infer N } ? N : never;
}[keyof T];
