import { Abilities } from "../data/abilities.ts";
import { Ability } from "../enums/mod.ts";
import { KeyUnion, ValueUnion } from "../util/mod.ts";

export type AbilityName = KeyUnion<typeof Abilities>;
export type AbilityID = ValueUnion<Ability>;