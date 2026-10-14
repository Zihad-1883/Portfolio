export const projects = [
  {
    id: "algoarena",
    category: "team",
    title: "AlgoArena — AI Competitive Programming & Contest Arena",
    projectType: "Team Project (My Role: Full-Stack Contributor — Core Engine, Real-Time & AI Quiz System)",
    image: "/algoarena.png",
    url: "https://algoarena-front-end.vercel.app",
    github: "https://github.com/onamika-yesmin/algoarena-Front-end",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Judge0",
      "Claude API",
      "Team Collaboration",
    ],
    desc: "AlgoArena is an AI-enhanced competitive programming and technical interview platform built by Team CODEXA that turns every submission into an interactive learning loop via AI hints, complexity auditing, mock interviews, and real-time contests. The platform unifies problem-solving practice, performance analytics, peer review, and live coding competitions into a single ecosystem powered by Anthropic Claude, Judge0, Socket.IO, and Next.js.",
    myRole:
      "I served as the Core Engine Developer and Real-Time Systems Developer, owning the complete backend infrastructure (app bootstrap, auth, Judge0 integration, submission judging, scoring), the Socket.IO real-time contest and leaderboard engine, and independently designed and shipped the full-stack AI-Powered Quiz System — from Mongoose schemas and a Claude-driven generation pipeline to a 36 KB admin moderation dashboard and a responsive exam-mode frontend — as a solo, end-to-end feature.",
    metrics: [
      "Team of 4 Devs (Team CODEXA)",
      "Owned 5 of 12 Core Features + Solo AI Quiz System",
      "27 Next.js Routes — 0 Build Errors",
      "End-to-End Quiz System: Claude + Judge0 Pipeline",
    ],
    architecture: `[ Team CODEXA — AlgoArena System Architecture ]

  Next.js Frontend (App Router)
       │
       ├─► [ Problem Workspace (MY: F1, F2, F7) ]
       │         Monaco Editor → POST /api/submissions
       │
       ├─► [ Contest Arena & Leaderboard (MY: F8, F9) ]
       │         Socket.IO Client ──► join:contest / join:leaderboard rooms
       │
       ├─► [ AI Quiz System (MY SOLO FEATURE) ]
                 Quiz Hub → /api/quiz/start → /api/quiz/:id/submit → /results

  ─────────────────────────────────────────────────────────────────────────────

  Express Backend (algoarena-back-end / src/modules/*)
       │
       ├─► [ MY: app.ts + server.ts ] ── Bootstraps CORS, cookie-parser, routes
       ├─► [ MY: modules/auth/ ] ── Google OAuth → JWT access + refresh tokens
       ├─► [ MY: integrations/judge0/ ] ── executeCode() · runAgainstTestCase()
       ├─► [ MY: modules/submission/ ] ── judgeSubmission() → verdicts → scoring
       ├─► [ MY: sockets/ ] ── Socket.IO server · JWT auth handshake · rooms
       ├─► [ MY: modules/contest/ + modules/leaderboard/ ] ── CP tie-breaking · MongoDB $count
       └─► [ MY SOLO: modules/quiz/ ]
               quiz.generator.ts  (Claude API → Zod → fallback generator)
               quiz.verifier.ts   (Judge0 exec + secondary LLM + dedupHash)
               quiz.service.ts    (start/submit/result + auto-flag quality loop)
               Admin REST API     (generate-batch 202 · review queue · CRUD)`,
    stack: [
      "Overall Team Stack: Next.js 14 (App Router), React, TypeScript, Node.js, Express, MongoDB Atlas (Mongoose), Tailwind CSS, Socket.IO",
      "Technologies I Specifically Used: Judge0 API, Anthropic Claude API, google-auth-library, JWT rotation via HttpOnly cookies, Socket.IO (server + client), Zod contracts, MongoDB aggregation ($sample, $match, $count), Vanilla CSS Modules",
    ],
    highlights: [
      "Backend Infrastructure & Utilities: Bootstrapped the entire Express application (app.ts + server.ts), implemented Zod-validated environment config, built shared API utilities (catchAsync, sendResponse, AppError, JWT helpers), and wired the global error handler + 404 middleware.",
      "Google OAuth Auth Module: Built the complete authentication flow end-to-end — Google ID token verification (google-auth-library), find-or-create user logic with isNewUser detection, dual JWT access + refresh token issuance via HttpOnly cookies, and secure token rotation.",
      "Judge0 Integration & Scoring Engine: Migrated code execution to Judge0, implemented async polling fallback, runtime ID pinning, normalizeOutput (CRLF/whitespace), full verdict set (AC/WA/TLE/MLE/RE/CE), hidden test masking, and hint-penalized scoring.",
      "Real-Time Contest & Leaderboard Engine: Built Socket.IO server with JWT auth handshake, contest/leaderboard rooms, non-blocking submission event emissions, CP-standard tie-breaking, and O(1) MongoDB $count rank lookups.",
      "Solo AI-Powered Quiz System (End-to-End, 6 Phases): Conceived, architected, and shipped QuizQuestion & QuizSession Mongoose schemas, 25-question seed bank, Claude-driven bulk generator with Zod validation, two-tier verifier (Judge0 sandbox + secondary LLM), anti-cheat answer stripping, backend exam timer, and a 36 KB Admin Moderation Dashboard (PRs: Backend #10 · Frontend #8).",
      "Git Collaboration & API Contracts: Owned the Zihad branch across both repos, defined shared module boundary rules, coordinated Judge0 service API contracts with DEV 2, and resolved cross-branch integration conflicts.",
    ],
    challenges:
      "The hardest cross-team integration challenge was aligning the Judge0 execution contract with DEV 2's AI test-case generator: both depended on runAgainstTestCase() but had mismatched expectations around memory limit units (MB vs KB), polling timing, and MLE detection semantics — resolved by defining a shared integration interface and running coordinated end-to-end tests before merging branches. On the real-time side, making Socket.IO coexist with Vercel's stateless serverless environment required separating the WebSocket layer onto a persistent Node host with a getIO() singleton.",
    future:
      "Quiz System: replace dedupHash with vector embedding similarity search (MongoDB Atlas Vector Search) and add weakness-weighted $sample pipelines. Submission Engine: migrate Judge0 polling to BullMQ + Redis job queues. Real-Time Layer: add Redis pub/sub as Socket.IO adapter for horizontal multi-instance scaling.",
  },
  {
    id: "devmentor",
    category: "fullstack",
    title: "DevMentor — Mentorship & Technical Assessment Marketplace",
    image: "/devmentor.png",
    url: "https://dev-mentor-client.vercel.app",
    github: "https://github.com/Zihad-1883/L2-A7-DevMentor-Client",
    githubServer: "https://github.com/Zihad-1883/L2-A6-DevMentor-Server",
    tags: ["Next.js 16", "React 19", "Express 5", "TypeScript", "Prisma ORM", "PostgreSQL"],
    desc: "A full-stack credit-based mentorship and assessment marketplace connecting aspiring engineers with vetted industry mentors through personalized sprint sessions, group cohorts, and structured code reviews. Built with role-aware Next.js proxy guards, an automated double-entry credit escrow system, and seamless bKash payment gateway integration.",
    metrics: [
      "99 REST Endpoints across 16 Domain Modules",
      "3 Role-Protected Hubs (Student, Mentor, Admin)",
      "4 Mentorship Verticals (Sprints, Cohorts, Reviews, Exams)",
      "Automated Credit Escrow & bKash Payment Gateway",
    ],
    architecture: `[ Next.js 16 Client (React 19) ] ──► [ Next.js Proxy / RBAC Route Guards ]
│
▼
[ Express 5 REST API (TypeScript) ] ──► [ Upstash Redis / bKash PGW / Cloudinary ]
│
▼
[ PostgreSQL / Prisma ORM 7 ] ──► [ Cron SLA Handlers & Double-Entry Escrow ]`,
    stack: [
      "Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion",
      "Backend: Node.js, Express 5, TypeScript, Zod, Better Auth",
      "Database & Caching: PostgreSQL, Prisma ORM 7, Upstash Redis",
      "State & Data Fetching: TanStack Query v5, Zustand, React Hook Form",
      "Integrations & Services: bKash PGW (Tokenized Checkout), Cloudinary, Nodemailer, PDFKit",
      "Hosting: Vercel (Client & Serverless API), Supabase / Neon PostgreSQL",
    ],
    highlights: [
      "Architected an automated credit escrow ledger that holds student funds during 1-on-1 sprints and code reviews, auto-releasing payouts upon delivery or refunding on SLA breach",
      "Implemented concurrency-safe review claiming with temporary distributed preview locks via Upstash Redis to eliminate race conditions among concurrent mentors",
      "Constructed zero-flicker RBAC middleware using Next.js proxy routing with Better Auth cookie forwarding across Student, Mentor, and Admin dashboards",
      "Engineered an interactive sprint slot negotiation engine featuring relative-day scheduling, calendar matrix previews, and time proposal confirmation workflows",
    ],
    challenges:
      "Handling concurrency during peer code review claims and sprint slot booking required strict transactional guarantees against double-assignment. If multiple mentors attempted to claim the same high-bounty review simultaneously, race conditions could cause conflicting ownership and credit leakage. This was solved by combining distributed Redis preview locks with atomic Prisma PostgreSQL interactive transactions ($transaction) and automated SLA expiration cron jobs that safely release escrowed student credits upon timeout.",
    future:
      "Planning integrated WebRTC peer-to-peer video rooms directly inside sprint sessions, automated AI-powered pre-review feedback pipelines using LLMs, and WebSocket-driven live notifications for new open review pool alerts.",
  },
  {
    id: "image-matching-engine",
    category: "backend",
    title: "AI Image Understanding & Content Matching Engine",
    image: "/image-matching-engine.png",
    url: null,
    github: null,
    githubServer: "https://github.com/Zihad-1883/-flyrank-capstone-image-relevance",
    tags: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "pgvector",
      "Google Gemini",
      "Express.js",
    ],
    desc: "An enterprise-grade multimodal AI engine that pairs stock images with blog content via 768-dimensional vector search and a deterministic 3-tier Mismatch Guard safety layer. Built with an asynchronous background worker queue, token cost observability, and human-in-the-loop review workflows.",
    metrics: [
      "100% Top-1 Precision on benchmark eval",
      "768-Dim Dense Vector Search (<1ms query latency)",
      "3-Tier Deterministic Mismatch Guard",
      "Full Token & USD Cost Observability ($0.30/1M tokens)",
    ],
    architecture: `[ Client / Swagger Docs ] ──► [ Express Router (TypeScript ESM) ]
│
┌────────────────────┴────────────────────┐
▼                                         ▼
[ Sync Ingestion & Posts ]       [ Async DB Job Queue ]
│                                         │
▼                                         ▼
[ PostgreSQL + pgvector ] <───────────────── [ Background Worker Loop ]
(Vectors & Relational)                    │
▲                                         ▼
└─────────────────────────────── [ Gemini AI (Vision + Embeddings) ]`,
    stack: [
      "Runtime & Language: Node.js 20+, TypeScript (ESM)",
      "Backend & Routing: Express.js, Swagger / OpenAPI",
      "Database & Vectors: PostgreSQL 16, pgvector (768-dim cosine distance)",
      "AI Models: Google Gemini 1.5 Flash Lite (Vision Tagging), Gemini Embeddings",
      "Validation & Testing: Zod (runtime LLM output validation), Vitest",
    ],
    highlights: [
      "Engineered a 3-rule deterministic Mismatch Guard filtering false positives (evaluating AI confidence ≥ 0.60, cosine similarity ≥ 0.65, and domain semantic contradictions) to eliminate vector hallucination overlaps.",
      "Architected an asynchronous, non-blocking ingestion pipeline with a PostgreSQL transactional job queue featuring 3-stage exponential backoffs and automatic dead-letter flagging.",
      "Integrated runtime LLM output enforcement with Zod schemas and token telemetry logging operation-level token count and USD cost directly to an audit database.",
      "Implemented Top-1 precision evaluation test suites with Vitest, validating candidate retrieval against ground-truth benchmarks and human-in-the-loop audit endpoints.",
    ],
    challenges:
      "Standard vector similarity search frequently produced false positives between semantically overlapping concepts (e.g., mispairing a wolf photo with a red fox article due to ~70% shared visual and environmental vector space). This was solved by designing a post-retrieval Mismatch Guard engine that cross-examines vision-extracted categorical boundaries and confidence metrics before approving recommendations.",
    future:
      "Implement an HNSW vector index in pgvector for sub-millisecond scaling across 100k+ image catalogs, integrate Redis/BullMQ for distributed queue scaling, and deploy an interactive Next.js review dashboard for editorial teams.",
  },
  {
    id: "gearup",
    category: "fullstack",
    title: "GearUp — Outdoor & Sports Equipment Rental Platform",
    image: "/gearup.png",
    url: "https://l2-a5-gear-up-client.vercel.app",
    github: "https://github.com/Zihad-1883/L2-A5-Gear-Up--Client",
    githubServer: "https://github.com/Zihad-1883/L2-A4-Gear-Up--Server",
    tags: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Express 5", "SSLCommerz"],
    desc: "A full-stack sports and outdoor equipment rental ecosystem offering atomic booking lifecycles, dual-sided marketplace dynamics, and automated transactional payment processing. Engineered with an asynchronous event-driven payment validation system and granular role-based access control.",
    metrics: [
      "25+ Modular REST Endpoints",
      "3 Specialized User Roles (Customer, Provider, Admin)",
      "Sub-150ms Database Query Latency via Prisma & Pg Adapter",
      "100% Automated IPN Webhook Reconciliation",
    ],
    architecture: `[ Next.js 16 App Router UI ] ──► [ Server Actions / JWT Auth Middleware ]
│
▼
[ Express 5 TypeScript REST API ] ──► [ SSLCommerz / Payment Gateway ]
│                                     │ (IPN Webhook)
▼                                     ▼
[ Prisma ORM + PostgreSQL ] ◄─────── [ Transaction Handler & Inventory Lock ]`,
    stack: [
      "Frontend: Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide Icons, Sonner",
      "Backend: Node.js 20, Express 5, TypeScript, tsx, tsup",
      "Database: PostgreSQL, Prisma ORM (@prisma/adapter-pg)",
      "Authentication: JWT (Access & Refresh tokens), bcryptjs, HTTP-Only Cookie Session Management",
      "Payments: SSLCommerz Integration (Multi-channel payment & IPN webhook confirmation)",
      "Hosting: Vercel (Client) & Render / Railway (Backend API)",
    ],
    highlights: [
      "Architected multi-tier RBAC for Customers, Providers, and Admins with strict middleware route guards and context-aware permissions.",
      "Engineered robust rental order state machines (Pending ➔ Confirmed ➔ Active ➔ Completed ➔ Cancelled) with inventory reservation safeguards.",
      "Integrated SSLCommerz payment sessions with secure IPN (Instant Payment Notification) validation to prevent duplicate checkouts and fraud.",
      "Implemented Next.js 16 server-side authentication verifying JWTs via HTTP-only cookies directly within layouts and middleware for zero-flash renders.",
    ],
    challenges:
      "Handling concurrent rental bookings while keeping equipment availability strictly synchronized across overlapping date ranges presented data-race risks. Solved this by executing transactional validations with Prisma inside PostgreSQL isolation boundaries, checking overlapping reservation intervals before persisting state and triggering the payment gateway pipeline.",
    future:
      "Implement Redis-based geospatial caching for instantaneous nearby equipment lookups, real-time customer-provider order chat using WebSockets, and automated equipment damage dispute workflows.",
  },
  {
    id: "erythroshare",
    category: "fullstack",
    title: "ErythroShare",
    image: "/erythroshare.png",
    url: "https://l1-a10-erythro-share-client.vercel.app/",
    github: "https://github.com/Zihad-1883/L1-A10-ErythroShare-Client",
    tags: ["Next.js 16", "Better Auth", "MongoDB", "Express"],
    desc: "Full-stack healthcare coordination system handling multi-role access control (Admin, Volunteer, Donor), protected Express REST APIs, and automated blood request workflows.",
    metrics: ["3 Access Roles", "Real-Time Request Dispatch", "JWT & CORS Protection", "Better Auth Adapter"],
    architecture: `[ Next.js 16 App Router Client ]
               │  REST APIs & Custom Hooks
               ▼
   [ Express.js Security Gateway ] ──► [ Better Auth Middleware ]
               │
               ▼
[ MongoDB Database Cluster ]`,
    stack: [
      "Next.js 16 (App Router)",
      "React 19 & TypeScript",
      "Better Auth (MongoDB Adapter)",
      "HeroUI V2 & Tailwind V4",
      "Express.js Server",
      "JWT & CORS Protection",
    ],
    highlights: [
      "Multi-role user authentication (Donor, Volunteer, System Administrator)",
      "Protected dashboard routes with session caching and real-time request tracking",
      "Donor search indexing by blood group, district, and availability status",
    ],
    challenges:
      "Implementing secure session state and middleware routes using Better Auth and the MongoDB adapter within the Next.js 16 App Router context.",
    future:
      "Integrate real-time mapping for hospitals and donors to optimize dispatching, and add automated blood inventory management systems.",
  },
  {
    id: "travel-ai",
    category: "fullstack",
    title: "Travel AI",
    image: "/travelai.png",
    url: "https://project-travel-ai.vercel.app",
    github: "https://github.com/Zihad-1883/Project-Travel-AI",
    tags: ["Next.js 14", "TypeScript", "Groq AI (LLM)", "Express", "MongoDB", "SSE Streaming"],
    desc: "A full-stack agentic AI travel platform where travelers discover, customize, and book expedition packages — powered by a Groq LLM recommendation engine and real-time streaming AI chat concierge via Server-Sent Events.",
    metrics: ["Groq LLM Engine", "Streaming SSE Chat", "AI Package Match Scores", "Google OAuth & Demo Logins"],
    architecture: `[ Next.js 14 App Router Client ] ──► [ Google OAuth / JWT Auth ]
         │  SSE Streaming / REST APIs
         ▼
 [ Express.js + TypeScript API ] ──► [ Groq SDK (LLM Inference Engine) ]
         │                                  │
         ▼                                  ▼
 [ MongoDB + Mongoose DB ] ◄──────── [ AI Recommendation Matcher ]
 ├── User (Traveler, Admin)
 ├── Package Catalog & Filter Index
 └── Booking Requests (Status Machine)`,
    stack: [
      "Next.js 14 (App Router) & TypeScript",
      "Node.js & Express API Server",
      "Groq SDK (LLM Inference Engine)",
      "Server-Sent Events (SSE) Streaming",
      "MongoDB & Mongoose ORM",
      "JWT & Google OAuth (@react-oauth/google)",
      "Recharts & TanStack Query",
    ],
    highlights: [
      "Smart Trip Planner matching user parameters with real database packages using Groq LLM (Match score 0-100 & reasoning)",
      "AI Chat Concierge streaming token-by-token responses via Server-Sent Events with package & booking context tools",
      "AI Search Refinement engine presets (Make it cheaper, Luxury Focus, Shorter Trip, Adventure)",
      "Admin Analytics Console with Recharts package/booking distribution charts & status workflow",
      "Google OAuth integration & instant demo login presets for Traveler and Admin testing",
    ],
    challenges:
      "Building an AI-focused product for the first time presented a steep learning curve. Managing Groq LLM API rate limits and quota caps required implementing graceful fallback mechanisms, prompt token optimization, and structured output parsing to ensure reliable AI recommendation scores without hitting API limits.",
    future:
      "Planning to implement Redis response caching for frequent AI itinerary queries, vector embeddings for semantic package search, and multi-agent travel route optimization.",
  },
  {
    id: "nextkey",
    category: "fullstack",
    title: "NextKey",
    image: "/nextkey.png",
    url: "https://project-next-key.vercel.app/",
    github: "https://github.com/Zihad-1883/Project-Next-Key",
    tags: ["Next.js 16", "Express 5", "TypeScript", "MongoDB"],
    desc: "Monorepo property rental platform engineered with Next.js App Router and TS-Node backend, implementing dynamic multi-param database filtering, pagination, and RBAC security.",
    metrics: ["Monorepo Architecture", "Multi-Param Search Queries", "Landlord & Tenant Roles", "Analytics Dashboard"],
    architecture: `[ Next.js 16 Client Monorepo ] ◄── (Shared TS Interfaces) ──► [ TS-Node Express API ]
                                                                      │
                                                                      ▼
                                                          [ MongoDB Database ]`,
    stack: [
      "Next.js 16 (App Router)",
      "React 19 & TypeScript 5",
      "Express 5 & Node.js",
      "MongoDB Native Driver",
      "Tailwind CSS 4 & Framer Motion",
      "Recharts Data Visualization",
    ],
    highlights: [
      "Shared TypeScript interfaces between client and server monorepo structure",
      "Dynamic filtering engine (price range, property type, bed/bath counts, location)",
      "Landlord rental management dashboard with request tracking",
    ],
    challenges:
      "Managing a clean monorepo architecture with type safety shared across Next.js and Express while structuring custom queries for multi-param database filtering.",
    future:
      "Add real-time WebSocket chat between landlords and tenants, and integrate bKash / SSLCommerz payment gateways for advance booking.",
  },
  {
    id: "devpulse",
    category: "backend",
    title: "DevPulse",
    url: "https://dev-pulse-l2-a2-psi.vercel.app",
    github: null,
    githubServer: "https://github.com/Zihad-1883/L2-A2-DevPulse-",
    image: "/devpulse.png",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "NeonDB"],
    desc: "RESTful issue-tracking engine built with TypeScript, Node.js, and PostgreSQL, featuring JWT refresh-token rotation, 15+ relational entities, and role-based access control.",
    metrics: ["15+ Relational Tables", "JWT Token Rotation", "Bcrypt Security", "PostgreSQL RBAC"],
    architecture: `[ Web / Postman Client ] ──► [ Express TS Router ] ──► [ JWT & Password Auth ]
                                           │
                                           ▼
                                [ PostgreSQL / Neon DB ]`,
    stack: [
      "Node.js & Express",
      "TypeScript 5",
      "PostgreSQL & NeonDB",
      "JWT & Bcrypt Hashing",
      "Zod Schema Validation",
    ],
    highlights: [
      "Role-Based Access Control (Admin, Team Member, Reporter)",
      "Normalized relational PostgreSQL database design for issues, projects, and users",
      "Refresh token rotation and secure authorization middleware",
    ],
    challenges:
      "Designing a clean normalized database schema for multi-team issue tracking while enforcing granular permission checks across all API routes.",
    future:
      "Build a React frontend web client and integrate email notifications for issue assignment updates.",
  },
  {
    id: "football-ticket-db",
    category: "backend",
    title: "Football Ticket Database",
    url: null,
    github: null,
    githubServer: "https://github.com/Zihad-1883/L2-A3-Football-Ticket-Booking-System---Database-Design-SQL-Queries",
    image: "/football-ticket-db.png",
    tags: ["PostgreSQL", "Relational Database", "Complex SQL"],
    desc: "Fully designed and normalized relational database schema for managing stadium seating, match scheduling, fan registrations, and automated booking transactions using complex SQL queries.",
    metrics: ["Normalized SQL Schema", "Relational FK/PK Integrity", "Subqueries & Aggregations", "Transaction Logic"],
    architecture: `[ Fans & Users ] ──► [ Match Scheduling ] ──► [ Ticket Inventory & Pricing ]
                                                          │
                                                          ▼
                                            [ Booking Transactions (SQL) ]`,
    stack: [
      "PostgreSQL Database",
      "Relational Schema Constraints (PK/FK/Check)",
      "Complex SQL Multi-Table JOINs",
      "Subqueries & Aggregations",
      "Skip-Limit Pagination Queries",
    ],
    highlights: [
      "Enforced domain integrity and foreign key constraints across relational entities",
      "Engineered analytical SQL queries for stadium revenue analysis and ticket availability tracking",
      "Optimized query execution logic for high-concurrency match booking simulation",
    ],
    challenges:
      "Enforcing domain and referential integrity constraints across tables while preparing SQL query execution scripts using advanced multi-table JOINs and subqueries.",
    future:
      "Expose this schema through a Node-Express REST API backing a web frontend client with index tuning.",
  },
];
