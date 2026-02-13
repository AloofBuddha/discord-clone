# Development Tools Setup

## Available Tools

✅ **Core Development:**
- Node.js v24.12.0 + npm/bun
- TypeScript 5.x
- Docker + Docker Compose (PostgreSQL + Redis)
- Git + GitHub CLI (authenticated)

✅ **Databases:**
- PostgreSQL 15 (port 5432)
- Redis 7 (port 6379)
- Prisma ORM + migrations

✅ **Browser:**
- Google Chrome available at `/usr/local/bin/google-chrome`
- Can use for testing via OpenClaw browser control

⚠️ **Testing (In Progress):**
- Playwright installation in progress
- Will enable E2E browser testing

## Development URLs

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:3001/api/health
- **Database:** postgresql://dev:dev123@localhost:5432/discord_clone

## Verification Commands

```bash
# Health checks
curl http://localhost:3001/api/health
curl http://localhost:3000/

# Database
docker ps | grep discord-clone
npx prisma studio  # Database GUI

# Services status
cd ~/src/discord-clone && npm run dev  # Starts both client + server
```

## Autonomous Development Workflow

1. **Check TASKBOARD.md** for next task
2. **Write code** with TypeScript safety
3. **Test locally** (curl + visual browser check)
4. **Verify database changes** (Prisma Studio)
5. **Screenshot working feature**
6. **Commit with clear message**
7. **Update task board**
8. **Report progress via Telegram**

Last updated: 2026-02-12 18:11 PST