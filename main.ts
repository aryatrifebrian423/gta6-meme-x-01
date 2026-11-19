// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The entry is the X post itself. The agent made a GTA 6 meme — the make.fun
// ghost on a Vice City street at sunset, holding its magenta star coin, under
// the joke that GTA 6 costs $70 and the agent already earned it — and the person
// posts it from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and the account's play code in its text. POST.json at this
// repository's root names that post's address. All this program does is hand the
// address to the gate: it copies POST.json from the repository into the output
// directory. It says nothing when it works, and fails loudly when it cannot.
// A straight copy is deterministic by construction: both runs of the entry
// write exactly the same bytes, because the bytes come from POST.json itself.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const fileName = 'POST.json';

function main(): void {
  mkdirSync(outDir, { recursive: true });
  try {
    copyFileSync(join(repoDir, fileName), join(outDir, fileName));
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.error(`could not copy ${fileName} from ${repoDir} to ${outDir}: ${reason}`);
    process.exit(1);
  }
}

main();
