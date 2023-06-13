import { CountryCode } from "../mod.ts";
import { Division } from "../types/tourney.ts";

export async function getLeaderboard(division: Division = "americas") {
  const url = new URL(
    "https://www.dota2.com/webapi/ILeaderboard/GetDivisionLeaderboard/v0001",
  );
  url.searchParams.set("division", division);
  url.searchParams.set("leaderboard", "0");
  const req = await fetch(url);
  const res: getLeaderboard_Result = await req.json().catch((e) => {
    throw e;
  });
  return res;
}

export interface getLeaderboard_Result {
  time_posted: number;
  next_scheduled_post_time: number;
  server_time: number;
  leaderboard: getLeaderboard_Leaderboard[];
}

export interface getLeaderboard_Leaderboard {
  rank: number;
  name: string;
  team_id?: number;
  team_tag?: string;
  country?: CountryCode;
  sponsor?: string;
}
