import { Heroes } from "../data/mod.ts";
import { CutStart, ValueObjectKeyUnion } from "../util/mod.ts";

type CutStringsInUnion<U> = U extends string ? CutStart<U, 14> : never;

export type HeroName = ValueObjectKeyUnion<typeof Heroes, 'name'>;
export type HeroID = ValueObjectKeyUnion<typeof Heroes, 'id'>;
export type HeroShortName = CutStringsInUnion<HeroName>
export type HeroLocalizedName = ValueObjectKeyUnion<typeof Heroes, 'localized_name'>
export type PrimaryAttr = "str" | "agi" | "int" | "all";
export type AttackType = "Melee" | "Ranged";
export type Role =
  | "Carry"
  | "Nuker"
  | "Initiator"
  | "Disabler"
  | "Durable"
  | "Escape"
  | "Support"
  | "Pusher"
  | "Jungler";
