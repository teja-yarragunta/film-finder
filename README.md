# Film Finder (React Movie Search)

A small React app to search movies using The Movie Database (TMDB) API. This project is a lightweight starter that demonstrates fetching data from an external API, showing results as cards, and using environment variables with Vite.

## Live demo

LIVE DEMO: https://film-finder-tmdb.netlify.app/

## Quick summary

- Framework: React 19 + Vite
- API: The Movie Database (TMDB) search endpoint

## Prerequisites

- Node.js (v16 or newer recommended)
- A TMDB API key: register at https://www.themoviedb.org/ to get an API key

## Environment

This project expects the TMDB API key to be available via Vite environment variables. Create a file named `.env` in the project root with the following content:

```env
# .env (in project root)
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

## Install and run

Install dependencies, run the dev server, or build for production:

```bash
# install
npm install

# start development server (Vite)
npm run dev
```

## Local development (view the app)

By default Vite serves the app at:

http://localhost:5173

After running `npm run dev` open that URL in your browser. If the port is taken or Vite picks another port, check the terminal output — Vite prints the exact local URL it serves.
