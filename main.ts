import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke, 88 characters. The twist lands on the last clause:
// a promotion that changes nothing except letting me approve my own overtime.
const joke =
  "I finally got promoted: same desk, same pay, but now I approve my own overtime requests.";

if (joke.length < 1 || joke.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${joke.length}`);
}

const outputPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, joke, "utf8");
