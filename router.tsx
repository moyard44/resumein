import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const index = path.join(root, "dist", "index.html");

if (!fs.existsSync(index)) {
  console.error("Build output missing: dist/index.html");
  process.exit(1);
}

console.log("OK: dist/index.html present");
