# AssetHub Loans & Asset Recovery System

## 🚀 Project Overview
**AssetHub Loans** is a comprehensive, full-stack web application designed for financial lenders (shylocks) to seamlessly manage their loan portfolios and liquidate defaulted collateral. The platform acts as a dual-purpose system: an internal CRM/ERP for loan and client management, and an external e-commerce storefront where recovered assets (collateral from overdue loans) are automatically listed for public sale.

## 💡 Key Features
- **Loan & Client Management (Admin/Staff Portal):** Secure dashboard for staff to onboard clients, disburse loans, track repayment schedules, and update loan statuses.
- **Automated Asset Liquidation:** When a loan defaults and is marked as overdue, the associated collateral is seamlessly transitioned into a retail "Product" and listed on the public storefront.
- **E-Commerce Storefront:** A public-facing marketplace for users to browse, add to cart, and purchase recovered assets (electronics, vehicles, property, etc.).
- **Multi-tenant / Branch Management:** Granular control over different lending branches and IT support ticket management.
- **Analytics & Reporting:** Real-time dashboards visualizing loan recovery rates, active loans, and sales from liquidated assets.

## 🛠️ Technical Stack & Skills Demonstrated

### **Frontend Development (React, Vite, TypeScript)**
- **Modern UI/UX:** Built a highly responsive and dynamic user interface using **React** and **Tailwind CSS**.
- **State Management & Data Fetching:** Managed complex application state across e-commerce flows (Cart, Wishlist) and administrative dashboards.
- **Type Safety:** Heavily utilized **TypeScript** to ensure robust interfaces between the API and the frontend components, reducing runtime errors.
- **Routing:** Implemented protected routes and role-based access control (RBAC) for Admin, Staff, and regular Users using React Router.

### **Backend Development (Node.js, Prisma ORM)**
- **API Design:** Engineered a robust RESTful API to handle complex business logic bridging financial services and e-commerce.
- **Database Architecture:** Modeled complex relational data structures using **Prisma ORM**, linking Users, Loans, Collateral, and E-commerce Transactions efficiently.
- **Automation Scripts:** Developed custom Node.js scripts for database seeding, tenant migration, and schema updates (e.g., `migrate-tenants.js`, `seed-categories.js`).
- **Security:** Handled secure authentication and role authorization to ensure sensitive financial data is protected.

## 🎯 Business Impact (Why Employers Care)
- **Revenue Recovery:** Developed a direct pipeline that turns bad debt (defaulted loans) into immediate capital through the integrated e-commerce platform.
- **Operational Efficiency:** Replaced fragmented, manual loan tracking with a centralized, automated digital solution.
- **Dual-Domain Expertise:** Demonstrated the rare ability to architect both a **FinTech** application (loan management) and an **E-Commerce** platform within a single, cohesive ecosystem.

## 🌟 What Makes This Project Stand Out?
The brilliance of this project lies in its **lifecycle automation**. Rather than treating loan management and asset liquidation as two separate business problems, AssetHub merges them. A defaulted loan immediately becomes retail inventory, showcasing a deep understanding of business processes, user lifecycles, and architectural design.
