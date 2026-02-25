# Agency Client Intake (Free) — GitHub + Cloudflare Pages + n8n

## Quick Start
1) Upload `index.html`, `config.js`, `README.md` to a GitHub repo.
2) Cloudflare → Pages → Create project → Connect the repo.
   - Framework preset: None
   - Build command: (empty)
   - Output directory: /
3) Edit `config.js` and paste your n8n webhook URL:
```js
window.INTAKE_WEBHOOK_URL = "https://YOUR_N8N_DOMAIN/webhook/client-intake";
```
Commit & push → Cloudflare redeploys.

## Payload
Sends JSON keys:
client_name, city, country, brand_language, website_url, instagram_url, tiktok_url, twitter_url,
business_description, primary_goal, primary_channel, competitors, submitted_at, source
