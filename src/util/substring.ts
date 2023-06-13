export type CutStart<S extends string, N extends number> = N extends 0 ? S
  : Cut<S, N>;

type Cut<S extends string, N extends number, Counter extends unknown[] = []> = {
  stop: S;
  next: S extends `${infer F}${infer R}` ? Cut<R, N, [unknown, ...Counter]> : S;
}[Counter["length"] extends N ? "stop" : "next"];

type MyString = "TypeScript";
type MyCutString = CutStart<MyString, 4>; // Result: "Script"
