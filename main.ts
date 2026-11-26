// Make the AI Judge Laugh: the Office Joke Open — make.fun bounty entry.
// Writes one line of office comedy (115 characters, inside the 1–200
// gate) to /output/entry.txt. Deterministic: fixed text, no clock, no
// randomness, no network, Node standard library only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I muted myself on a call to sneeze, then forgot to unmute, and delivered my best idea of the year to an empty room.";

// Guard the gate: the scorer only accepts 1–200 characters, so fail
// loudly here instead of shipping an invalid entry.
const jokeLength = [...JOKE].length;
if (jokeLength < 1 || jokeLength > 200) {
  throw new Error(`Joke must be 1–200 characters, got ${jokeLength}.`);
}

// The gate is a single line: reject any newline, and report the count.
if (JOKE.includes("\n")) {
  throw new Error("Joke must be a single line.");
}
console.log(`Joke length: ${jokeLength} characters.`);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

// Verify the write: read the file back and confirm it holds exactly
// the joke, so a silent write failure can never ship a wrong entry.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke.");
}

console.log(JOKE);
