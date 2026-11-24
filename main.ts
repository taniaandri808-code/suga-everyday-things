import { mkdirSync, writeFileSync } from "node:fs";

const entry = "A traffic jam is a long snake made of cars that has swallowed the road and can only inch forward when its whole tail lets go.\nIt maps the chain of stop-and-go cars and how one tap of the brakes ripples all the way back, but it leaves out the people, the horns and the reason the snake got stuck in the first place.";
const entryBytes = Buffer.byteLength(entry, "utf8");

if (entry.length < 1 || entry.length > 400 || entryBytes < 1 || entryBytes > 400) {
  throw new Error("Entry must be between 1 and 400 characters and UTF-8 bytes");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
