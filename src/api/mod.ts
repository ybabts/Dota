export * from "./getMatchDetails.ts";
export * from "./getMatchHistory.ts";
export * from "./getRealtimeStats.ts";
export * from "./getTopLiveGame.ts";
export * from "./getLeaderboard.ts";

type apiKey = string | null;

export let apiKey: apiKey = null;
export let endpoint = "https://api.steampowered.com/";

export function setAPIKey(key: apiKey): void {
  apiKey = key;
}

export function setEndpoint(url: string): void {
  endpoint = url;
}
