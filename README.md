# bub-n-gub-adventures
A Repo for the Amazing Adventures of Bub n' Gub

## Firebase Hosting Migration

This project is configured to deploy as a static Next.js export to Firebase Hosting.

### 1) Set your site URL

In your local `.env`, set:

`NEXT_PUBLIC_SITE_URL=https://<your-project-id>.web.app`

### 2) Install Firebase CLI (if needed)

```bash
npm i -g firebase-tools
firebase login
```

### 3) Link this repo to your Firebase project

Replace the placeholder in `.firebaserc`:

`"default": "your-firebase-project-id"`

### 4) Build + deploy

```bash
npm run firebase:deploy
```

This runs a static export (`out/`) and deploys it to Firebase Hosting.
