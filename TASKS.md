# Open Tasks - agents-head.com

## Done (this session)
- [x] SEO pipe fixed (Pi cron venv, Ubuntu claude PATH)
- [x] Sitemap resubmission added to scout
- [x] 3 use case pages (document-automation, ai-chatbot, ai-assistant)
- [x] 4 service pages (business-automation, api-integrations, ai-agents, legacy-modernization)
- [x] Navbar redesign (full-width, centered menu, CTA button)
- [x] Project/service cards link to their pages
- [x] Domain references updated: ai.aglamaz.com → agents-head.com (14 files)
- [x] Vercel env vars set (Firebase config, admin emails)
- [x] DNS configured in GoDaddy (A → 76.76.21.21, CNAME www → cname.vercel-dns.com)
- [x] Vercel domains added (agents-head.com + www)
- [x] Deployed to Vercel production
- [x] Anonymized Importa use case (regulatory compliance, no trace)

## TODO - Admin Panel
- [x] Fix admin layout CSS (added Heebo font to admin layout.tsx)
- [ ] Test Google sign-in flow on localhost:3030/admin/login *(manual)*
- [ ] Set up Vercel Blob store (dashboard → Storage → Create → Blob) to get BLOB_READ_WRITE_TOKEN *(Vercel dashboard)*
- [ ] Add BLOB_READ_WRITE_TOKEN to Vercel env vars *(Vercel dashboard)*
- [ ] Test content editing flow: login → edit section → save → verify on public page *(manual)*
- [ ] Deploy admin to production and test on agents-head.com/admin *(after above)*

## TODO - Firebase *(Firebase console)*
- [ ] Verify Google sign-in is enabled in Firebase project yaakov-aglamaz-com (Authentication → Sign-in method → Google)
- [ ] Add localhost:3030 to Firebase authorized domains (Authentication → Settings → Authorized domains)
- [ ] Add agents-head.com to Firebase authorized domains

## TODO - SEO Pipe
- [x] Update Pi scout SITES config to include agents-head.com domain
- [x] Update maintenance agent to know about the new domain/repo mapping (cicd/TODO.md)
- [ ] Add agents-head.com to Google Search Console *(Google console)*
- [ ] Submit sitemap for agents-head.com *(Google console)*

## TODO - Content *(waiting on Nadar)*
- [ ] Add og:image to all pages (need branded social preview image from Nadar)
- [ ] Update logo/brand name after Nadar finalizes octopus design

## Ports
- Dev: 3030 (per ~/develop/docs/ports.txt)

## Firebase Project
- Project: yaakov-aglamaz-com
- Service account: firebase-adminsdk-fbsvc@yaakov-aglamaz-com.iam.gserviceaccount.com
- Config in: .env.local (not committed)
