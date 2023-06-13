import { Countries } from "../data/mod.ts";
import { KeyUnion } from "../util/mod.ts";

type CountryCommonNamePropertyUnion<T> = {
  [K in keyof T]: T[K] extends { name: { common: infer N } } ? N : never;
}[keyof T];

export type CountryCode = KeyUnion<typeof Countries>;
export type CountryName = CountryCommonNamePropertyUnion<typeof Countries>;
