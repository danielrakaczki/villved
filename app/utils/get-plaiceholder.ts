"use server";
import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder, GetPlaiceholderOptions } from "plaiceholder";

export type GetImagePlaceholderReturn = Awaited<ReturnType<typeof getPlaiceholder>>;

export async function getImagePlaceholder(src: string, options?: GetPlaiceholderOptions) {
  const image = await fs.readFile(path.join("./public", src));
  return JSON.stringify(await getPlaiceholder(image, options));
}
