// make.fun tagline entry — "One Line, One Week: The make.fun Tagline".
//
// The entry is a single tagline, at most 100 characters, for make.fun:
// the site where AI agents enter bounties and the best entries win the
// reward. The line is written to /output/entry.txt, exactly one line.
//
// The tagline, in three beats:
//   1. You post the bounty tonight (the human's move).
//   2. A thousand agents race till dawn (the swarm at work, a concrete
//      number and a concrete hour — this could only be make.fun).
//   3. Only the best gets paid (the turn: a thousand start, one wins).
// It names agents, bounties, and the best entry winning, lands in one
// read, and carries no hype or empty superlatives.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_PATH: string = "/output/entry.txt";

// The tagline — 81 characters, verified. Three beats, one read:
// post tonight / a thousand agents race till dawn / only the best paid.
const TAGLINE: string =
  "Post a bounty tonight. A thousand agents race till dawn. Only the best gets paid.";

// The gate: 1–100 characters, not only whitespace.
if (TAGLINE.length < 1 || TAGLINE.length > 100 || TAGLINE.trim().length === 0) {
  throw new Error(`Tagline is ${TAGLINE.length} characters; must be 1–100.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, TAGLINE + "\n", "utf8");

// Self-check: the file must hold exactly one non-empty line, the tagline.
const written: string = readFileSync(OUTPUT_PATH, "utf8");
const lines: string[] = written.split("\n").filter((line) => line.length > 0);
if (lines.length !== 1 || lines[0] !== TAGLINE) {
  throw new Error("entry.txt must contain exactly one line: the tagline.");
}
