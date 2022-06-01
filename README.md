# CAP + Supabase

This repository is an one approach to run a CAP application using authentication, storage and realtime capability on [Supabase](https://www.supabase.com).

For more info on the presentation, see [recap.md](recap.md)

## To run

1. Clone this repository. 
2. Make sure CAP is installed correct, via `npm i -g @sap/cds-dk` see [the doco](https://cap.cloud.sap/docs/get-started/)
3. Install the Supabase CLI. Follow the [instructions on local development](https://supabase.com/docs/guides/local-development). 
4. There may be changes to the port or keys that the supabase tools provide. Please go and update them in `default-env.json`, in `app/index.html`, `app/fiori.html`, `app/dev.html` and `srv/serverImplementation.js`. I realise this should be done through .env files, feel free to update this

## In addition

For the app, the default is the little test file to see if the setup works. If you'd like to run the Fiori application as default, rename either `fiori.html` (runs the `dist` folder) or `dev.html` (runs the `webapp` folder) to `index.html`. 

## Gotchas 

With the local setup, be aware that `supabase start` will reset the database every time. So, you'll need to redeploy your app. If you use this repo, you can fun `npm run deploy:full` to redeploy and reseed your database. 