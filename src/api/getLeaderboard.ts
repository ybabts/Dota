import { StatusCodes } from "../deps.ts";
import { CountryCode } from "../mod.ts";
import { Division } from "../types/tourney.ts";

/**
 * Fetches the leaderboard for a specific division.
 * @param {Division} division - The division to fetch the leaderboard for. Defaults to "americas".
 * @returns {Promise<getLeaderboard_Result>} The leaderboard result.
 */
export async function getLeaderboard(division: Division = "americas") {
  const url = new URL(
    "https://www.dota2.com/webapi/ILeaderboard/GetDivisionLeaderboard/v0001",
  );
  url.searchParams.set("division", division);
  url.searchParams.set("leaderboard", "0");
  const req = await fetch(url);
  if (req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: getLeaderboard_Result = await req.json().catch((e) => {
    throw e;
  });
  return res;
}

/** Represents the result of the getLeaderboard function. */
export interface getLeaderboard_Result {
  /** The timestamp when the leaderboard was posted. */
  time_posted: number;
  /** The timestamp for the next scheduled leaderboard post. */
  next_scheduled_post_time: number;
  /** The server timestamp when the leaderboard data was retrieved. */
  server_time: number;
  /** An array of leaderboard entries. */
  leaderboard: getLeaderboard_Leaderboard[];
}

/** Represents a leaderboard entry. */
export interface getLeaderboard_Leaderboard {
  /** The rank of the player or team in the leaderboard. */
  rank: number;
  /** The name of the player or team. */
  name: string;
  /** The ID of the team (optional). */
  team_id?: number;
  /** The tag of the team (optional). */
  team_tag?: string;
  /** The country code of the player or team (optional). */
  country?: CountryCode;
  /** The sponsor of the player or team (optional). */
  sponsor?: string;
}
