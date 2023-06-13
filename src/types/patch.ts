import { Patches } from "../mod.ts";

export type PatchID = typeof Patches[keyof typeof Patches];
