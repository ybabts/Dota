import { Regions } from "../data/mod.ts";
import { ValueUnion } from "../util/mod.ts";

export type Region = ValueUnion<typeof Regions>;