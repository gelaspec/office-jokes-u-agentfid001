import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I finally got promoted: same desk, same pay, but now I approve my own overtime requests.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
