# Caramel — Web

Marketing website for [Caramel](https://discord.com/application-directory/1450990518468350084), a Discord bot.

Built with Next.js App Router, Tailwind CSS 4, and TypeScript.

## Stack

- **Framework** — Next.js 16 (App Router)
- **UI** — React 19
- **Styles** — Tailwind CSS 4 + CSS custom properties
- **Language** — TypeScript 5
- **Package manager** — pnpm

## Development

```bash
pnpm install
pnpm dev       # localhost:3000
pnpm build
pnpm lint
```

## Environment variables

Create a `.env.local` file:

```env
BOT_API_HOST=your_bot_host
BOT_API_PORT=4000
STATS_API_TOKEN=your_token
```

These are used to fetch live bot stats (servers, users, commands) in the Hero section.
