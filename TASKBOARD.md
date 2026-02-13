# Discord Clone - Task Board

## Current Sprint: Foundation (Sprint 1)

### 🎯 Sprint Goal
Set up project foundation with proper TypeScript, database, auth, and basic UI shell.

### 📋 Tasks

#### ✅ Done
- [x] Create GitHub repo
- [x] Set up task board

#### 🔨 In Progress  
- [ ] Project scaffolding (monorepo structure)

#### 📅 Todo (Current Sprint)
- [ ] Docker Compose setup (PostgreSQL + dev env)
- [ ] Prisma schema design
- [ ] Backend foundation (Express + TypeScript)
- [ ] Frontend foundation (React + Vite + TypeScript)
- [ ] Auth system (register/login/JWT)
- [ ] Basic UI shell (layout components)
- [ ] Integration test: Auth flow E2E

#### 🔮 Future Sprints
**Sprint 2: Core Chat**
- [ ] Server creation/joining
- [ ] Channel CRUD
- [ ] Real-time messaging (Socket.io)
- [ ] Message history with pagination
- [ ] Typing indicators

**Sprint 3: Users & Presence**
- [ ] Online/offline presence
- [ ] User profiles  
- [ ] Member lists
- [ ] Direct messages

**Sprint 4: Permissions & Polish**
- [ ] Role system
- [ ] File uploads
- [ ] Message editing
- [ ] Responsive design

**Sprint 5: Deploy & Demo**
- [ ] Production build
- [ ] Deploy script
- [ ] Demo data
- [ ] Documentation

---

## Working Principles
1. **Write → Run → See → Fix → Confirm → Commit**
2. Every feature gets browser tested before commit
3. Tests pass before any merge
4. Type safety first
5. Clear commit messages with scope

## Architecture Decisions
- **Stack:** React + TypeScript + Express + PostgreSQL + Socket.io
- **Monorepo:** `/client` + `/server` + shared types
- **Database:** PostgreSQL with Prisma ORM
- **Real-time:** Socket.io for messaging + presence
- **Auth:** JWT with refresh tokens
- **Testing:** Vitest + Playwright for E2E
- **Dev:** Docker Compose for local env

## Current Status
🚀 Project started: 2026-02-12 17:56 PST
⚡ Active development in progress