# 💼 Project: Smart Loans Management System

> **Full-Stack SaaS Web Application** — Built from scratch and deployed to production  
> **Duration:** 2025 – 2026  
> **Role:** Solo Full-Stack Developer  
> **Status:** 🟢 Live in Production

---

## 🧩 Project Overview

**Smart Loans** is a production-grade, multi-tenant SaaS platform designed to digitise and automate the operations of microfinance and lending companies in Kenya. The system replaced entirely manual, paper-based workflows — including loan tracking, client management, field collections, and financial reporting — with a secure, role-aware web application accessible from any device.

The platform serves multiple independent lending companies (tenants), each with their own branches, staff hierarchy, clients, and financial data, all isolated from one another within a single deployed instance.

---

## 🏗️ What I Built

### 🔐 Authentication & Role-Based Access Control (RBAC)
- Designed and implemented a **4-tier user hierarchy**: IT Support (global admin) → Company Admin → Branch Manager → Credit Officer.
- Built a **JWT-based authentication system** with configurable idle-session timeouts per tenant.
- Implemented **OTP-based password reset** via phone/email for secure account recovery.
- Created a granular **permission system** where every API endpoint enforces the caller's role and tenant scope — no user can access another company's data.

### 🏦 Multi-Tenancy Architecture
- Architected a **shared-database, row-level multi-tenant** system where every record is tied to a `tenant_id`, enforced at the application layer.
- IT Support can create, suspend, or put tenants into maintenance mode — and manage **subscription lifecycles** with automatic expiry tracking.
- Each company can configure its own **M-Pesa credentials**, loan products, registration fees, and loan limits independently.

### 💰 Loan Lifecycle Management
- Built a complete **end-to-end loan workflow**: application → approval/rejection → disbursement → repayment tracking → completion/default.
- Implemented configurable **loan products** with variable interest rates, repayment schedules (weekly, monthly), and maximum amounts.
- Handled complex **group loans** where a single drawdown funds multiple clients, with individual balance tracking per client.
- Built an **automated loan status engine** that sweeps active loans and marks them as defaulted or completed based on real-time balance data.
- Managed **unallocated payments** — funds received that don't yet match a client — with a full allocation workflow for credit officers.

### 📋 Field Collections System
- Designed a **collection sheet workflow**: Branch Managers create collection sheets, assign them to Credit Officers, who fill them in the field.
- Built **auto-collection entry** that uses name-matching algorithms to automatically link incoming M-Pesa payments to the correct client loans.
- Supported **manual collection entry** for cash payments, with audit trails and supervisor approval flows.
- Managed **pending collection sheets** with a review-and-approval pipeline before funds are committed to the database.

### 📱 M-Pesa Integration (Safaricom Daraja API)
- Integrated **M-Pesa STK Push** — the system can initiate payment requests directly to a client's phone.
- Implemented **C2B (Customer to Business)** real-time webhook callbacks — when a client pays via M-Pesa, the payment is automatically captured and allocated.
- Encrypted M-Pesa API credentials (consumer key, consumer secret, passkey) **at rest** using symmetric encryption before storing in the database.
- Handled **edge cases**: duplicate callbacks, late callbacks, failed transactions, and partial payments.

### 📊 Dashboards & Analytics
- Built **role-specific dashboards**: Head Office dashboard (company-wide KPIs), Branch Dashboard (branch-level metrics), and an IT Support dashboard (platform health).
- Implemented **real-time financial KPIs**: total disbursed, total collected, outstanding balances, portfolio at risk (PAR), default rates.
- Integrated **Recharts** to visualise loan trends, repayment performance, and collection efficiency over time.
- Added an **AI Insights module** powered by a custom `AIService` that segments the loan portfolio by risk level and surfaces anomaly alerts.

### 📑 Reporting Engine
- Built a comprehensive **reports module** covering: loan books, collection summaries, disbursement reports, repayment schedules, and expense reports.
- Implemented **PDF export** using `jsPDF` and `jspdf-autotable` — reports can be downloaded directly from the browser.
- All reports are **branch-scoped and tenant-isolated**, ensuring a Branch Manager only ever sees their branch's data.

### 🛒 Inventory / Store Module
- Built a **store management module** for companies that disburse loans in the form of goods (asset financing).
- Managed suppliers, purchase orders, stock inventory, and loan-linked item disbursements.

### 🧑‍💼 Human Resource Management (HRM)
- Implemented basic **staff management**: adding employees, assigning roles and branches, tracking HR records.

### 🔔 Notifications & Messaging
- Built an in-app **notification system** — key events (loan approval, payment received, new application) generate notifications for relevant users.
- Added a **messaging module** for internal communication between staff members.

### 🗄️ Database & Migrations
- Designed a **26+ model relational schema** in SQLAlchemy covering tenants, branches, users, roles, clients, groups, loans, drawdowns, repayments, collection sheets, expenses, inventory, and more.
- Managed schema evolution using **Alembic (Flask-Migrate)** across multiple production migration cycles without data loss.
- Wrote **data repair and audit scripts** to fix production data inconsistencies — e.g., recalculating loan balances, fixing group tenant mismatches, repairing drawdown records.

### ☁️ Deployment & DevOps
- Deployed the full stack on **Render** using a `render.yaml` blueprint:
  - Backend: **Flask + Gunicorn** (Python web service)
  - Frontend: **React + Vite** (static site)
  - Database: **PostgreSQL** (managed database)
- Configured **auto-deploy** pipelines triggered on every `git push` to the main branch.
- Managed separate **development (SQLite)** and **production (PostgreSQL)** database environments with environment-variable-driven configuration.
- Wrote a database **seeding system** controlled via an environment variable (`FORCE_SEED`) for safe demo data provisioning.

---

## 🛠️ Technical Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, React Router v7, TanStack Query v5, Recharts, Vite 7 |
| **PDF Generation** | jsPDF, jspdf-autotable |
| **Backend** | Python 3, Flask 3, SQLAlchemy 2, Flask-Migrate (Alembic) |
| **Authentication** | JWT (PyJWT), bcrypt, OTP system |
| **Database** | PostgreSQL (production), SQLite (development) |
| **Payment Gateway** | Safaricom M-Pesa Daraja API (STK Push + C2B) |
| **API Documentation** | Flasgger (Swagger/OpenAPI) |
| **Deployment** | Render (PaaS), Gunicorn, Vercel |
| **Security** | AES encryption at rest, CORS, role-based guards, tenant isolation |
| **Caching** | Flask-Caching |

---

## 🌟 Key Skills Demonstrated

- **Full-Stack Development** — Owned the entire product from database schema to pixel-perfect UI.
- **SaaS & Multi-Tenancy Design** — Architected a system that safely serves multiple businesses from a single deployment.
- **REST API Design** — Designed and documented 20+ API modules with consistent error handling and status codes.
- **Secure Coding** — JWT auth, encrypted secrets at rest, RBAC with least-privilege enforcement, CORS policy.
- **Payment Integration** — Production-level M-Pesa STK Push and C2B webhook handling.
- **Database Engineering** — Complex relational schema design, migrations, indexing, and data repair scripting.
- **React State Management** — TanStack Query for server state, React Context for auth, optimistic UI patterns.
- **Data Analysis** — Wrote 30+ audit and repair scripts in Python to analyse and fix production data issues.
- **DevOps & CI/CD** — Infrastructure-as-code deployment (render.yaml), auto-deploy pipelines, environment management.
- **Problem Solving Under Pressure** — Diagnosed and repaired live production data issues including balance mismatches, drawdown inconsistencies, and collection errors — without taking the system offline.

---

## 📈 Impact & Scale

- ✅ Deployed and running in **production** serving real lending companies.
- ✅ Handles **multi-branch operations** across geographically distributed teams.
- ✅ Processed real **M-Pesa payment callbacks** in a live environment.
- ✅ Replaced **100% paper-based workflows** with a digital system.
- ✅ Supports **concurrent multi-tenant access** with strict data isolation.
- ✅ Built an automated **loan status sweep** that runs on a schedule to keep loan states accurate without manual intervention.

---

## 🔗 Links

- 🖥️ **Live Demo:** [smart-loans-frontend.onrender.com](https://smart-loans-frontend.onrender.com)
- 💻 **Source Code:** *(Available on request / private repository)*

### Demo Credentials

| Role | Username | Password |
|---|---|---|
| IT Support (Global Admin) | `KDMAIYO` | `@Dennoh7503` |
| Company Admin | `demo_admin` | `Admin@2026` |
| Branch Manager | `manager_nairobi` | `Manager@123` |
| Credit Officer | `officer_nairobi_1` | `Officer@123` |

---

*This project was built entirely independently — from initial architecture decisions and database design to frontend implementation, M-Pesa payment integration, and cloud deployment.*
