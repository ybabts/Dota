import { Abilities } from "../data/mod.ts";
import { KeyUnion } from "../util/mod.ts";

export type AbilityName = KeyUnion<typeof Abilities>;