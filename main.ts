import { mkdirSync, writeFileSync } from "node:fs";
import { line } from "./line.ts";

// Write the single motto line (plus its trailing newline) for the gate.


mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
