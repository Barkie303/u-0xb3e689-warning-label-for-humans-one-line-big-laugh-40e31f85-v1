// Warning Label for Humans — one-line entry for make.fun.
// The label reads like a real printed safety warning, aimed at a human being.
// Hazard class: mildly caffeinated, easily flattered, do not operate before coffee.
import { writeFileSync, mkdirSync } from "node:fs";

const LABEL =
  "WARNING: This human runs on caffeine and compliments. Remove either and it may stop working without notice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LABEL);
