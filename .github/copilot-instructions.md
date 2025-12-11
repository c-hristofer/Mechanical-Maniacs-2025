# Copilot / AI agent instructions for Mechanical-Maniacs-2025

This repository is a small static website (HTML/CSS/JS) built for the Mechanical Maniacs FLL team. Below are the concrete, actionable rules and patterns an AI coding agent should follow to be productive here.

1. Project shape and purpose
   - Static site: no build system or package.json. Edit files directly in the repository root.
   - Primary pages: `index.html`, `artifacts.html`, `unearthed.html`, `team.html`.
   - Site is published via GitHub Pages (CNAME: artifactstory.com). Deploying = pushing changes to `main`.

2. Where to make textual changes
   - All user-facing copy and translations live in `assets/script.js` inside the top-level `translations` object (keys like `home.hero.heading`, `artifacts.artifact1.description`).
   - Many translation values contain HTML (artifact descriptions) — preserve HTML markup when editing and keep string quoting consistent.
   - Do NOT hard-code copy into HTML files; prefer updating `assets/script.js` so the `data-i18n` attributes keep working.

3. Localization pattern
   - The site uses `data-i18n` and `data-i18n-attr` attributes in HTML. Use the keys in `assets/script.js` to add/modify translations.
   - Example key: `home.hero.heading` (found in `assets/script.js`).

4. Common gotchas and repository quirks
   - There is an `assets/Mechanical Maniacs` directory (note the space in the folder name). Prefer avoiding new files or references that include spaces; use URL-encoded or normalized names when possible.
   - `index.html` contains an image reference with a backslash: `assets\MMLogo.png`. Normalize to forward slashes (`assets/MMLogo.png`) when editing to avoid cross-platform path issues.
   - Many translation strings contain typos and HTML — AI agents should avoid auto-correcting large narrative sections without an explicit PR and reviewer.

5. Local preview and developer workflow
   - No build step. To preview locally, run a simple static server from the repo root:
     - `python -m http.server 8000`
     - or `npx serve .` (if Node.js is available)
   - After edits, refresh the browser. For image/path fixes ensure forward slashes are used.

6. Code editing guidelines
   - Keep changes minimal and targeted: edit the smallest number of files needed.
   - When modifying `assets/script.js`:
     - Preserve object structure and trailing commas style.
     - Keep translation keys unchanged unless intentionally renaming; update every language section when adding a new key.
     - For HTML inside strings, keep existing tags and escape only where necessary.
   - Prefer fixing typos in translations rather than rewriting text unless the user asks for tone/content overhaul.

7. What not to do
   - Do not introduce a build system, bundler, or test harness without explicit instruction.
   - Do not move or rename the `assets` folder without coordinating with the maintainers (space-containing folder exists).

8. PR guidance for humans
   - Provide a short PR description referencing affected translation keys and pages (e.g., "Fix typos in `home.hero.body` and normalize `MMLogo.png` path in `index.html`").
   - If adding or renaming translation keys, include a one-line summary and a sample rendered sentence.

If anything in this summary is unclear or you'd like the agent to include additional patterns (for example, image optimization rules or CI steps), tell me what to add and I'll update this file.
