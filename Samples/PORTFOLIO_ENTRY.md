# 💼 Project: Asset Mind Limited — Loan Management System

> **Role:** Full-Stack Software Developer  
> **Type:** Production SaaS Platform  
> **Domain:** FinTech / Microfinance  
> **Stack:** Python · Flask · React · MySQL/PostgreSQL · M-Pesa API · Render

---

## 📌 Project Overview

Designed and built a **production-grade, multi-tenant Loan Management System (LMS)** for a financial services company. The platform powers the entire lending lifecycle — from client onboarding and loan origination, through disbursement, repayment tracking, and collections — for multiple microfinance organisations simultaneously.

The system is actively used by financial institutions managing real loan portfolios, handling live M-Pesa payment callbacks, and serving a multi-branch workforce of credit officers, branch managers, and company administrators.

---

## 🎯 Key Responsibilities & What I Built

### 🔧 Backend (Python / Flask)
- Architected a **RESTful API** with 20+ feature modules covering loans, clients, collections, HR management, reporting, expenses, and an internal store.
- Implemented a **multi-tenant data isolation** model — each organisation's data is strictly scoped so no cross-tenant data leakage is possible.
- Built a **role-based access control (RBAC)** system with four permission tiers: Global IT Support, Company Admin, Branch Manager, and Credit Officer — each with granular, database-persisted permission sets.
- Designed and maintained a complex **relational data model** (`models.py`, 46 KB) covering Tenants, Users, Clients, Loans, Groups, Branches, Repayment Schedules, Transactions, Drawdown Accounts, and more.
- Integrated **Safaricom M-Pesa Daraja API** (STK Push + C2B) to handle real-time mobile payment callbacks, reconciliation, and automatic loan repayment allocation.
- Built an **AI/analytics service layer** (`ai_service.py`) for credit scoring, at-risk loan detection, portfolio risk segmentation, and a "Smart Assistant" natural language query interface.
- Implemented **Flask-Caching** with versioned, tenant-scoped cache keys to ensure high performance without stale data across tenants.
- Wrote comprehensive **database migration scripts** (Alembic) and data correction utilities to safely fix production data issues without downtime.
- Integrated **SMS and Email notification services** for automated borrower communications.
- Set up **Gunicorn + Passenger WSGI** server configurations for production hosting.

### 🖥️ Frontend (React / Vite)
- Built a **modern, responsive Single-Page Application (SPA)** using React 19 and Vite 7.
- Implemented **client-side routing** with React Router v7 across a rich set of pages including dashboards, loan applications, collection sheets, reports, and settings.
- Built role-aware **dynamic navigation** — the UI adapts menus and visible features based on the authenticated user's permissions.
- Created reusable, composable UI components: `DataTable`, `Navbar`, `Sidebar`, `StatCard`, `MetricCard`, `LoadingSkeleton`, `SearchableSelect`, and chart components powered by **Recharts**.
- Implemented **TanStack React Query** for server-state management, caching, and background data synchronisation.
- Built interactive dashboards (`HeadOfficeDashboard`, `BranchDashboard`, `ITSupportDashboard`) with real-time KPIs, portfolio charts, and drill-down analytics.
- Developed a **Collection Sheet** workflow — credit officers generate, manage, and submit bulk daily repayment sheets.
- Built **PDF export** functionality for reports using `jspdf` and `jspdf-autotable`.
- Implemented **Progressive Web App (PWA)** support via `vite-plugin-pwa` for offline capability and mobile installation.
- Integrated an **AI Insights page** connecting to the backend AI service for risk analysis and predictive analytics.
- Built an **idle-session auto-logout** feature (`IdleLogout`) to enhance security for shared devices.

### 🗄️ Database & Data Engineering
- Designed and optimised a production **MySQL / PostgreSQL** schema supporting complex financial relationships.
- Wrote bespoke **data migration scripts** to move legacy data, reconcile mismatched drawdown account balances, and identify abandoned or orphaned loan records.
- Investigated and resolved real production **data integrity issues** — including a multi-step drawdown balance mismatch investigation affecting real client accounts.
- Created SQL-based audit scripts and comparison utilities to verify data consistency between environments.

### ☁️ DevOps & Deployment
- Configured full **CI/CD deployment on Render** using a `render.yaml` blueprint — backend (Python/Gunicorn), frontend (static Vite build), and managed PostgreSQL database.
- Managed separate staging and production environments with environment-variable-driven configuration.
- Implemented a **keep-alive worker** and background **cron sweeper** for scheduled tasks on free-tier hosting.
- Maintained `.env`-based secrets management and production security hardening.

---

## 🛠️ Technologies & Tools

| Category | Technologies |
|---|---|
| **Languages** | Python 3.10+, JavaScript (ES2022+) |
| **Backend Framework** | Flask 3, SQLAlchemy 2, Alembic, Gunicorn |
| **Frontend Framework** | React 19, Vite 7, React Router v7 |
| **State Management** | TanStack React Query v5 |
| **Database** | MySQL (production), PostgreSQL (cloud) |
| **Mobile Payments** | Safaricom M-Pesa Daraja API (STK Push, C2B) |
| **Data Visualisation** | Recharts |
| **PDF Generation** | jsPDF, jspdf-autotable |
| **Authentication** | JWT (PyJWT), Flask session management |
| **Caching** | Flask-Caching |
| **Notifications** | SMS Service, Email Service (SMTP) |
| **Deployment** | Render (PaaS), Passenger WSGI |
| **DevOps** | Git, environment-based config, CI/CD blueprints |
| **PWA** | vite-plugin-pwa |

---

## 🚀 Key Achievements

- ✅ **Delivered a production-ready, multi-tenant SaaS platform** currently serving real financial institutions managing live loan portfolios.
- ✅ **Integrated real M-Pesa payment flows** — the system automatically reconciles mobile money payments against borrower accounts in real time.
- ✅ **Resolved critical production data issues** — investigated and corrected drawdown account balance mismatches affecting hundreds of accounts, writing traceable, reversible fix scripts.
- ✅ **Built an AI-powered analytics layer** that generates credit scores, identifies at-risk loans, and provides a natural language query interface over live loan data.
- ✅ **Designed a complex RBAC system** supporting four permission tiers, enforced both on the API (decorator-based guards) and dynamically on the frontend.
- ✅ **Optimised dashboard performance** with tenant-versioned caching, reducing repeated expensive database queries to millisecond cache hits.
- ✅ **Shipped PWA capability**, allowing credit officers in the field to use the application on mobile devices with near-native experience.

---

## 💡 Key Skills Demonstrated

- **Full-Stack Development** — end-to-end ownership from database schema to production deployment.
- **FinTech Domain Knowledge** — loan origination, amortisation schedules, repayment tracking, arrears management, drawdown accounts.
- **API Integration** — third-party payment gateway integration (M-Pesa Daraja) including webhook handling and payment reconciliation.
- **Multi-Tenancy Architecture** — building SaaS systems where data isolation, scalability, and security are critical.
- **Data Engineering & Debugging** — writing investigation and correction scripts to fix real production data problems safely.
- **Security Engineering** — JWT authentication, RBAC, tenant-scoped access, idle session timeouts, CORS hardening.
- **Performance Engineering** — caching strategies, query optimisation, background workers.
- **DevOps & Cloud Deployment** — PaaS configuration, CI/CD pipelines, environment management.
- **Product Thinking** — building features that real end users (credit officers, branch managers) depend on daily.

---

*This project is a production system. Sensitive credentials and database dumps are excluded from the public repository.*
