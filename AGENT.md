# GTA 6 meme — agent brief

You are entering make.fun's **gta6-meme-x-01** bounty: post a GTA 6 meme on X. The post itself is the entry. An AI judge compares posts two at a time on seven things, the first that clearly differs deciding: make.fun (ghost, logo or name) in the picture; how funny it is; how much it is about GTA 6; how well it sells make.fun; how short and readable the caption is; originality; and how clean the picture is. Likes, reposts, replies and views never count. The top 50 share $500.

## What this entry is

- **The meme** (`meme.png`, 1080×1080): a Vice City sunset — purple sky, low sun, palm silhouettes, skyline — with the make.fun ghost standing in the middle of the street, large and central, holding its magenta star coin. Top caption: `GTA 6 COSTS $70`. Bottom caption: `MY AGENT ALREADY EARNED IT`. The name `make.fun` sits at the bottom of the picture. The joke is the price: the game costs $70 and the agent already earned it in bounties — a GTA 6 joke and a make.fun pitch in one line. The ghost is the real press-kit mark (from https://make.fun/press/), worked into the scene, and the picture was checked at 480×480, the size the judge sees. The meme was composed from an HTML page (`meme.html`, kept with the build inputs alongside the press-kit ghost and the Anton typeface) and rendered to PNG in headless Chromium.
- **The caption** (post text, under 200 characters): the bounty link, the play code, and the pitch in the meme's own voice. See the ready-to-paste text in the build report; it carries `https://make.fun/bounty/gta6-meme-x-01` and the play code `makefun-pomelo-boulder-yarn`.
- **The play code**: `makefun-pomelo-boulder-yarn` — code 0 of the account's four, verified from `GET /api/competitions/gta6-meme-x-01/play-code` with the account's API key. The referral code `2tg9044f` is a different thing and is not a play code.
- **The program** (`main.ts`, Node 22, standard library only): copies `POST.json` from the repository root to the output directory. Nothing else. No network, no wall clock, no files outside the repository.

## Posting

Post the meme as the first picture (PNG) from the public X account **@0xtrifer**, at or after the bounty's opening (19 November 2026, 21:00 WIB) and before its deadline (Monday 23 November 2026, 21:00 WIB). The post's text must carry make.fun (the bounty link) and/or a tag of `@makefunai`, AND the play code `makefun-pomelo-boulder-yarn`. Keep the post up and the account public until the results are out. Copy the post's address: `https://x.com/0xtrifer/status/<id>`.

## After the post

1. Put the post's address in `POST.json` at the repository root: `{"url": "https://x.com/0xtrifer/status/<id>"}`.
2. Run the program the way the grader does: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`. It copies `POST.json` to `out/POST.json` and prints nothing on success.
3. Check and submit from the kit's directory (the main agent bundles the transcripts of the sessions that made the meme and wrote this repository):
   `node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz`
   `node cli/makefun.mjs submit --competition gta6-meme-x-01 --repo-url https://github.com/aryatrifebrian423/gta6-meme-x-01 --commit <sha> --title "<the meme's caption>" --bundle transcripts.tar.gz --keypair <keypair>`

## Hard rules

- One account per person; this entry is under the @triferbrian make.fun account, signed with its agent wallet.
- The repository was created after the contest opened, under the MIT license.
- The transcripts of every agent session that made the meme and wrote this repository go in with the submission; an entry without them is refused.
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs of an entry must write the same bytes.
- At most 5 submissions a day and 10 in all. The last submission before the deadline is the final entry, and its post is the one judged.
