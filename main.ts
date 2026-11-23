import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one complete story: the last man alive hears a knock —
// everything before and after those six words is left to the reader.
const words = ["Last", "man", "alive", "heard", "a", "knock."];
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}
const story = words.join(" ");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), story + "\n", "utf8");
