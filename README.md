# Prompt Sensei — Bundle

You have two ways to run this:

## Quick (no server)
Open **index-local.html**. This version uses relative paths so it works via file://

## Recommended (PWA install, service worker)
Serve the folder over HTTP and open **index.html**:
- Python 3:  `python -m http.server 5500`
- Node:      `npx serve`

Then visit http://localhost:5500

### Structure
- index.html           — original (absolute paths)
- index-local.html     — local-friendly (relative paths)
- styles.css
- manifest.json
- service-worker.js
- js/
  - app.js
  - onboarding.js
  - prompts.js
  - store.js
  - api.js
  - builder.js