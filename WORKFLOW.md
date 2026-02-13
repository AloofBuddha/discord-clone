# Autonomous Development Workflow

## How I (Mr. Claw) Work on This Project

### Location
- **Project root:** `/home/aloofbuddha/src/discord-clone`
- **Task board:** `TASKBOARD.md` (source of truth for what to work on)
- **This file:** How to work on it

### Iteration Loop

For each task:

1. **Read** — Check TASKBOARD.md, find the next ⬜ or 🔨 task
2. **Plan** — Think about what files need to change, what the expected behavior is
3. **Write** — Implement the code changes
4. **Compile** — `cd server && npx tsc --noEmit` (must pass)
5. **Test** — `cd server && npx vitest run` (must pass)
6. **Manual verify** — Start server, curl endpoints, check responses
7. **Fix** — If anything fails, debug and fix (loop back to step 3)
8. **Commit** — `git add -A && git commit -m "feat: description"` with clear message
9. **Push** — `git push origin main`
10. **Update board** — Mark task ✅ in TASKBOARD.md, commit that too

### Validation Checklist (before marking any task ✅)
- [ ] TypeScript compiles with no errors
- [ ] All existing tests pass
- [ ] New tests written for new functionality
- [ ] Manual smoke test (curl or browser) confirms behavior
- [ ] No regressions in existing features

### When to Ping Ben
- **After completing a sprint/phase** — summary of what was built
- **When blocked** — design decisions, unclear requirements, environment issues
- **After significant milestones** — e.g., "real-time chat works end-to-end"
- **NOT for routine progress** — just update TASKBOARD.md

### Commands Cheat Sheet
```bash
# Server
cd /home/aloofbuddha/src/discord-clone/server
npm run dev                          # Start dev server (port 3001)
npx tsc --noEmit                     # Type check
npx vitest run                       # Run tests
npx prisma migrate dev --schema prisma/schema.prisma  # New migration
npx prisma generate --schema prisma/schema.prisma     # Regenerate client

# Client
cd /home/aloofbuddha/src/discord-clone/client
npm run dev                          # Start Vite (port 3000)

# Git
git add -A && git commit -m "feat: ..."
git push origin main

# Test endpoints
curl http://localhost:3001/api/health
curl -X POST http://localhost:3001/api/auth/register -H "Content-Type: application/json" -d '{"email":"test@test.com","username":"testuser","password":"password123"}'
```

### Architecture Decisions
- Auth is currently in-memory (needs migration to Prisma/DB)
- Prisma schema path: `prisma/schema.prisma` (from server/ dir)
- Shared types in `/shared` — keep in sync with Prisma schema
- JWT for auth, Socket.io for real-time
