## MBUSA Internal Mobility & Loaner Optimization Platform

A modern, production-style demo application showcasing how MBUSA could manage **internal mobility and dealer loaner optimization**. Built for an **IT App Management / internal tools** interview scenario using:

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN-style UI primitives**
- **Recharts** (analytics)
- **Zustand** (state)

Premium dark UI inspired by Mercedes-Benz (minimal, black/white/gray, subtle glass + shadows).

---

## Core Concepts

- **System Design Showcase**: Clear separation of Employee, Dealer, and Admin experiences.
- **Data-Driven**: Mock but realistic data for vehicles, bookings, employees, and locations.
- **Operational Thinking**: Dedicated pages for system architecture and app operations.
- **Interview-Ready**: Includes a guided Presentation Mode for storytelling.

---

## Project Structure (High-Level)

- `src/app/layout.tsx` – Root layout + global shell.
- `src/components/app-shell.tsx` – Sidebar navigation and main layout.
- `src/components/ui/*` – Lightweight ShadCN-style UI components.
- `src/lib/mock-data.ts` – Seed data (vehicles, bookings, employees, metrics).
- `src/store/app-store.ts` – Zustand store for shared app state.
- `src/app/page.tsx` – Executive landing page.
- `src/app/demo/*` – Feature pages:
  - `employee` – Employee Booking Portal
  - `dealer` – Dealer Inventory Portal
  - `admin` – Admin Dashboard
  - `data` – Data & Insights
  - `ai` – AI & Optimization
  - `architecture` – System Architecture
  - `operations` – App Management & Operations
  - `presentation` – Presentation Mode
- `src/app/api/*` – Mock API routes (`vehicles`, `bookings`, `metrics`).

---

## Running the App Locally

Prereqs:

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

### Production-style run (recommended for stability)

```bash
# Build optimized bundle
npm run build

# Start production server (example: port 3001)
npm run start -- -p 3001
```

Visit: `http://localhost:3001`

### Dev mode (if file-watch limits allow on your system)

```bash
npm run dev
```

If you hit `EMFILE: too many open files, watch`, increase your OS file watch limit (macOS example, run in a separate shell **once**):

```bash
ulimit -n 10000
```

Then re-run `npm run dev`.

---

## Demo Walkthrough (for Interview)

Recommended live flow:

1. **Executive Overview (`/`)**
   - Frame the business problem: idle dealer loaners + no centralized employee mobility access.
   - Highlight the three benefit cards (fleet optimization / cost / employee experience).

2. **Presentation Mode (`/demo/presentation`)**
   - Use the 4 cards (Problem, Solution, Architecture, Business Impact) as your verbal outline.
   - Jump into:
     - **Admin Dashboard** for “system impact”
     - **Architecture** for “how we’d build it”

3. **Employee Booking Portal (`/demo/employee`)**
   - Enter a mock employee ID (e.g. `EMP-500`).
   - Search by location/date; highlight:
     - Available vehicles by location and type.
     - Booking flow with guest toggle.
     - Confirmation message after booking (and that it updates global state).

4. **Dealer Inventory Portal (`/demo/dealer`)**
   - Show full table of vehicles with:
     - Status dropdown (Available / Reserved / Maintenance).
     - Idle Time badge (idle days).
   - Change a status and explain how it would feed back into Booking/Utilization in a real system.

5. **Admin Dashboard (`/demo/admin`)**
   - Metrics cards: total bookings, active vehicles, utilization %, idle vehicles.
   - Recharts:
     - Bookings over time.
     - Usage by vehicle category.
     - Top locations.
   - Recent bookings table + filter (Confirmed / Completed / Cancelled).
   - Talk about how this supports **App Management**: KPIs, SLAs, and business conversations.

6. **Data & Insights (`/demo/data`)**
   - Walk through each card:
     - Employee, Vehicle, Booking, Location, System Performance data.
   - For each, emphasize:
     - What is collected
     - Why it matters
     - Business impact

7. **AI & Optimization (`/demo/ai`)**
   - Recommended Vehicle example (logic described, not fully implemented ML).
   - Demand prediction chart: explain “SUV demand increases on weekends”.
   - Smart insights chips (e.g., “Dealer X has 30% idle inventory”).
   - Explain how this could be implemented with real data and a model in phase 2.

8. **System Architecture (`/demo/architecture`)**
   - Use the diagram boxes:
     - Frontend portals
     - Backend services (Auth, Booking, Inventory)
     - Data layer (Postgres, caching)
     - Integrations (HR, Dealer Mgmt System)
   - Call out example APIs:
     - `GET /api/vehicles?location=Dallas&status=Available`
     - `POST /api/bookings`
     - `PATCH /api/vehicles/:id/status`
     - `GET /api/metrics`

9. **App Management & Operations (`/demo/operations`)**
   - Monitoring section: uptime, latency.
   - Logs section: show example structured log lines.
   - Incident handling scenario: booking failure → alert → on-call → retry / fallback.
   - Deployment pipeline: Dev → QA → Prod with checks and gates.

This flow shows **product thinking**, **system design**, and **operational readiness** in ~15–20 minutes.

---

## Mock Data Overview

All mock data lives in `src/lib/mock-data.ts`:

- ~24 **vehicles** with:
  - Model (C-Class, GLE, EQE, etc.)
  - Type (SUV, Sedan, EV, Coupe)
  - Location (Austin, Dallas, Atlanta, etc.)
  - Status (Available, Reserved, Maintenance)
  - Idle days and lastUpdated timestamp
- ~56 **bookings**:
  - Employee ID, vehicle ID, location
  - Start/end dates
  - With/without guest flag
  - Status (Confirmed, Completed, Cancelled)
- **Employees** with ID, name, department, location.
- **Metrics** for dashboard and operations.

---

## State & APIs

- **Zustand store** (`src/store/app-store.ts`):
  - Holds vehicles and bookings.
  - `updateVehicleStatus(vehicleId, status)` for dealer updates.
  - `addBooking(booking)` for employee bookings (also marks vehicle Reserved).
- **Mock API Routes**:
  - `GET /api/vehicles` – filter by `location` and/or `status`.
  - `GET /api/bookings` – return static bookings.
  - `POST /api/bookings` – echo back a created booking (mock).
  - `GET /api/metrics` – aggregates for admin dashboard.

---

## Publishing to GitHub

If this folder is **not yet** a git repo:

```bash
cd /Users/kp/PersonalProjects/MBusa

# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit: MBUSA Internal Mobility Platform demo"
```

Create a new empty repo on GitHub (via the UI) – e.g. `mbusa-internal-mobility`.  
Then connect and push:

```bash
# 4. Add remote (replace with your actual GitHub URL)
git remote add origin git@github.com:<your-username>/mbusa-internal-mobility.git

# 5. Push main branch
git branch -M main
git push -u origin main
```

From there you can:

- Enable **GitHub Actions** for CI (lint + build).
- Add **environment variables** or integrations if you evolve beyond mock data.
- Configure **GitHub Pages** or a cloud host (Vercel, etc.) for live demos.

