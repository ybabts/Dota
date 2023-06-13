import { ItemIDs } from "../data/mod.ts";
import { KeyUnion, ValueUnion } from "../util/mod.ts";

export type ItemName = ValueUnion<typeof ItemIDs>;
export type ItemID = KeyUnion<typeof ItemIDs>;
