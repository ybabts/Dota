import { StatusCodes } from "../deps.ts";
import { PatchID } from "../types/patch.ts";

export async function getPatchnotesListe(language = "english") {
  const url = new URL("https://www.dota2.com/datafeed/patchnoteslist");
  url.searchParams.set("language", language);
  const req = await fetch(url);
  if (req.status !== StatusCodes.OK) throw new Error(await req.text());
  const res: { patches: getPatchnotesList_Result[] } = await req.json().catch(
    (e) => {
      throw e;
    },
  );
  return res.patches;
}

interface getPatchnotesList_Result {
  patch_number: PatchID | string;
  patch_name: string;
  patch_timestamp: number;
}
