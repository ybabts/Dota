import { Divisions } from "../data/tourney.ts";

export type Division = typeof Divisions[keyof typeof Divisions];
