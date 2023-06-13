import { StatusCodes } from "../deps.ts";
import { HeroLocalizedName, HeroName, PrimaryAttribute } from "../mod.ts";

export async function getHeroList(language = "english") {
  const url = new URL("https://www.dota2.com/datafeed/herolist");
  url.searchParams.set("language", language);
  const req = await fetch(url);
  if (req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: { result: getHeroList_Result[] } = await req.json().catch((e) => {
    throw e;
  });
  return res.result;
}

interface getHeroList_Result {
  id: number;
  name: HeroName;
  name_loc: HeroLocalizedName;
  name_english_loc: HeroLocalizedName;
  primary_attr: PrimaryAttribute;
  complexity: number;
}
