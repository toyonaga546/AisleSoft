# Aislesoft Next.js Privacy App (minimal)

This folder contains a minimal Next.js app that serves a standalone privacy page at `/privacy`.

How to run locally:

1. cd into this directory:

   ```bash
   cd next-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server (runs on port 3000):

   ```bash
   npm run dev
   ```

The privacy page will be available at http://localhost:3000/privacy

Notes:
- This is intentionally minimal. It does not include Tailwind setup. You can integrate styles or migrate the whole project to Next.js if you want unified styling and routing.
- The main site's footer currently points to `http://localhost:3000/privacy` (dev server). For production, adjust links accordingly.
