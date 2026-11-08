# BlockCode Website

A responsive, Apple-inspired landing page for BlockCode. It is a static website made with HTML, CSS and JavaScript.

## Files
- `index.html` — page content
- `style.css` — layout and visual design
- `script.js` — language switch, mobile menu and download button
- `assets/` — put your real app screenshots and logo here when ready

## Before publishing
1. Open `script.js`.
2. Find `DOWNLOAD_URL` near the top.
3. Replace `PASTE_YOUR_GITHUB_RELEASE_DOWNLOAD_URL_HERE` with the real URL of your published Windows ZIP/installer on GitHub Releases.
4. In `index.html`, replace `YOUR_SUPPORT_EMAIL` with an email address you want users to contact.
5. Replace the editor mockup with real screenshots later if you want to show the actual app UI.

The download button intentionally does not pretend to work until you add a real release URL.

## Cloudflare Pages
This is a plain static site. When connecting the GitHub repository to Cloudflare Pages, use:
- Framework preset: None
- Build command: leave empty if allowed, otherwise `exit 0`
- Build output directory: `.` (the repository root)

If you instead put the files in a `public` folder, set the output directory to `public`.
