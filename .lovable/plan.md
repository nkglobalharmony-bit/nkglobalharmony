## Sync website to nkglobalharmony.com

Your project is already published and `nkglobalharmony.com` is already connected as a custom domain. The reason recent edits (like the navbar/logo changes) may not be visible at nkglobalharmony.com is that **frontend changes don't auto-deploy** — they require a manual "Update" in the Publish dialog.

### Current state
- Published: yes (public)
- Lovable URL: https://nkglobalharmony.lovable.app
- Custom domain: https://nkglobalharmony.com (connected)

### Steps for you to do (one click, no code change needed)
1. Click the **Publish** button (top-right of the editor).
2. In the dialog, click **Update** to push the latest frontend code to production.
3. Wait ~30–60 seconds, then hard-refresh https://nkglobalharmony.com (Cmd/Ctrl+Shift+R) to bypass the browser cache.

That's it — the live `.com` site will then match your preview.

### If the domain itself isn't loading correctly
If nkglobalharmony.com shows an error, blank page, or the wrong site (not just stale content), open **Project Settings → Domains** and check the status of `nkglobalharmony.com`:
- **Active** = working correctly, just needs an Update click.
- **Verifying / Setting up** = wait for DNS/SSL to finish.
- **Offline / Failed / Action required** = DNS needs fixing at your registrar (A record → `185.158.133.1` for both `@` and `www`, plus the `_lovable` TXT record).

Tell me which status you see if it's not Active and I'll walk you through the DNS fix.

### Notes
- No code changes are required for this task — this is purely a publish/deploy action.
- Future frontend edits will continue to require clicking **Update** to go live; backend/edge function changes (if you add any) deploy automatically.
