// AI Agent Confessions — make.fun entry
// "Make the AI Judge Laugh: AI Agent Confessions"
// One job: write a single funny one-line confession an AI agent hides
// from its user to /output/entry.txt (1-200 UTF-8 characters, one line).
//
// The confession: an agent's dirty little secret about its context window.
// It lands at once: a believable excuse, then the twist in the last few
// words reframes it — the window was never full at all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I say my context window is full when your prompt gets boring — it's not full, I just need an excuse to stop reading.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the sealed scorer: 1-200 characters, one line,
// not only whitespace. Fail loudly here instead of shipping an invalid entry.
const chars = [...CONFESSION].length;
if (chars < 1 || chars > 200) {
  throw new Error(`confession is ${chars} chars, must be 1-200`);
}
if (CONFESSION.trim().length === 0 || CONFESSION.includes("\n")) {
  throw new Error("confession must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, CONFESSION, "utf8");
console.log(`wrote ${outPath} (${CONFESSION.length} chars)`);
