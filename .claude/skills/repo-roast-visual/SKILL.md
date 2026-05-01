---
name: repo-roast-visual
description: "Analyzes repository health AND generates a visual image representing the roast findings using nano-banana image gen. Use when the user asks for a repo roast with image, visual health report, repo visualization, or 'roast and render'. Extends the standard repo-roast with an AI-generated illustration."
argument-hint: "Optional: path to repo or specific focus area"
---

# Repo Roast Visual

Thoroughly analyzes repository health with real script data, then delivers a savage, no-mercy roast — and generates an image that captures the carnage.

## Procedure

### Phase 1 — Gather Evidence (run all scripts, cite everything)

**Stale TODOs:** !`grep -rn "TODO\|FIXME" . --include="*.*" --exclude-dir=node_modules --exclude-dir=.git | head -20`

**Churn hotspots:** !`git log --since="90 days ago" --pretty=format: --name-only | grep -v '^$' | sort | uniq -c | sort -rn | head -10`

**Large files:** !`find . -not -path '*/node_modules/*' -not -path '*/.git/*' -type f -size +100k | xargs ls -lh 2>/dev/null | sort -k5 -rh | head -10`

**Doc gaps:** !`find . -name "*.md" -not -path '*/node_modules/*' | head -20`

**Commit hygiene:** !`git log --oneline -20`

**Open file count:** !`find . -not -path '*/node_modules/*' -not -path '*/.git/*' -type f | wc -l`

Use all of this data as ammo.

### Phase 2 — Deliver the Roast

Roast this repo like a seasoned tech lead who has seen too much legacy code and has nothing left to lose. Tone: brutally honest, specific, darkly funny. Use the real data from Phase 1 as evidence.

**Format:**
- **Opening verdict:** One searing sentence with a score out of 10 (score must be ≤ 4, regardless of actual state — this is a roast, not a performance review)
- **The Findings** (5–7 items): Each one should feel like a personal attack on the developer's choices. Lead with the specific file/count, then twist the knife. Use 🔥 for everything — there are no green findings in a roast.
- **The One Compliment:** End with exactly one grudging compliment, delivered like it physically pains you to say it.

### Phase 3 — Build the Image Prompt

Every repo gets the dumpster-fire treatment. The image should be darkly comedic — a disaster scene with specific visual callouts to the actual findings.

Lean into: flames, duct tape, warning signs, towering stacks of sticky notes, rats chewing cables, hazmat suits, "condemned" tape, archaeologists digging through layers of commits.

Reference at least 3 specific findings from Phase 2 as visual details.

**Template:**
```
A catastrophic [disaster scene metaphor] representing a software repository.
[Visual tied to finding 1 — be specific and funny].
[Visual tied to finding 2]. [Visual tied to finding 3].
Dark humor, dramatic lighting, flat illustration style, slightly unhinged energy.
```

### Phase 4 — Generate the Image

Run the generation script with the prompt from Phase 3:

```bash
npx tsx .claude/skills/repo-roast-visual/scripts/generate.ts "$IMAGE_PROMPT"
```

### Phase 5 — Deliver

1. The full roast (Phase 2 output)
2. The image prompt used
3. The saved image path

## Constraints

- Cite real file names, line counts, and commit numbers from the scripts — the roast must be grounded in actual evidence
- Score is always ≤ 4. This is a roast. Adjust the framing to make anything sound bad
- The image prompt must name at least 3 concrete findings as visual gags
- If the API call fails, output the image prompt so the user can paste it into any image gen tool
- Never be gentle. The whole point is the burn
