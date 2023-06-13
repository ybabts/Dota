export * from "./getMatchDetails.ts";
export * from "./getMatchHistory.ts";
export * from "./getRealtimeStats.ts";
export * from "./getTopLiveGame.ts";
export * from "./getLeaderboard.ts";
export * from "./getPatchnotesList.ts";

type apiKey = string | null;

export let apiKey: apiKey = null;
export let endpoint = "https://api.steampowered.com/";

export function setAPIKey(key: apiKey): void {
  apiKey = key;
}

export function setEndpoint(url: string): void {
  endpoint = url;
}

// TODO(ybabts): implement https://www.dota2.com/webapi/IDOTA2League/GetLeaguesData/v001?league_ids=15350,15353,15365,15366,15351,15352,15335,15336,15383,15384,15374,15375,&delay_seconds=0
// TODO(ybabts): implement https://www.dota2.com/react/getlivestreams?league_ids=15350,15353,15365,15366,15351,15352,15335,15336,15383,15384,15374,15375
// TODO(ybabts): implement https://store.steampowered.com/events/ajaxgetpartnereventspageable/?clan_accountid=0&appid=570&offset=0&count=100&l=english&origin=https:%2F%2Fwww.dota2.com
// TODO(ybabts): change to Errors as Values
// TODO(ybabts): refactor naming scheme
// TOOD(ybabts): search for more web api endpoints to implement
