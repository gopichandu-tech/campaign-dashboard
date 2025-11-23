# 📊 Marketing Intelligence Dashboard

A modern, responsive front-end dashboard built with **React + Vite + TypeScript**, featuring a data-driven marketing analytics UI and a simulated **Prompt Playground** for natural-language-based interactions.

This project was created as part of the **AI Vibe Growth Platform — Front-End Developer Assignment**.

# Marketing Intelligence Dashboard

🔗 **Live Demo:** https://campaign-dashboard-gamma-eight.vercel.app/ 

---

## 🚀 Tech Stack

| Category | Technologies |
|---------|--------------|
| **Framework** | React 19, Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, tailwindcss-animate, tailwind-merge |
| **State Management** | Zustand |
| **Routing** | React Router DOM |
| **Charts** | Chart.js, react-chartjs-2 |
| **UI Components** | Radix UI, Lucide Icons |
| **Deployment** | Vercel |

---

## 📁 Project Architecture
<img width="724" height="611" alt="image" src="https://github.com/user-attachments/assets/4f529047-eb8e-4339-ba96-f618106d831d" />
📁 Project Structure — Component Explanations
### src/

Your main source folder. Everything that makes up the UI, logic, routing, and state of your app lives here.

### 📁 assets/

Contains static images, icons, logos, or media files.

Example: logo.webp, placeholder images.

❗ No logic here — only media.

### 📁 components/

Your reusable UI building blocks.
This is the heart of your front-end architecture.

Inside it, you have specific folders based on purpose:

### 📁 components/campaign/
Code related to the charts 

### 📁 components/cards/

Generic reusable card components.

### 📁 components/filterByComponents/

These are your filtering UI components, controlling: 
- FilterBy Status of the campaign,
- FilterBy CTR
- 
### 📁 components/ui/

Your custom UI primitives — similar to Radix UI, but styled with Tailwind.

Sliders

### 📄 DashboardSidebar.tsx

A layout component that renders the sidebar navigation. whcih contains the filters

### 📄 MainCardComponents.tsx

Usually where the campaign cards will be displayed 

### 📄 SearchBar.tsx

A reusable nav bar component.

### 📁 data/

Static JSON or mock API data.

Example:

- campaigns.json

- stats.json

Used for testing or assignment-based projects without backend APIs.

### 📁 layout/

Contains page layout wrappers.

DashboardLayout

### 📁 lib/

Helper functions, utilities, and logic shared across the project.

Examples:

Chart configuration functions

### 📁 pages/

Your React Router page-level components.

This is where you define actual routes,

### 📁 router/

Your project’s routing configuration.

Usually includes: React Router DOM setup

### 📁 store/

This contains all your Zustand state management stores.

You likely have:

uiStore.ts : tolds basic state data

filterStore.ts : holds Status filtering and CTR filtering

Date ranges

promptStore.ts

Handles natural-language logic, Keyword parsing, Triggering actions based on prompts

These stores are independent but can interact when needed.


---

## ✔ Why This Architecture?

- **Separation of Concerns** — Pages, components, data, and state are cleanly isolated.
- **Scalable** — Easy to extend with more dashboard pages, widgets, or APIs.
- **Reusable UI** — All shared building blocks live under `components/ui`.
- **Predictable State Handling** — Zustand stores manage campaigns, filters & prompt logic.

---

## 🧠 Core Features

### **1. Marketing Dashboard**
- Displays campaign insights using:
  - Cards and/or tables  
  - Name, Impressions, Clicks, CTR, Conversions, Status  
- Includes:
  - Filtering by **status**, **date**, or **keyword**
  - Performance trends chart (Chart.js)
  - Responsive layout (desktop & mobile)

---

### **2. Prompt Playground (AI Simulation)**
A natural-language input that reacts to lightweight keyword-based logic.

Example prompts:
- **“Show top campaigns by CTR”**
- **“List paused campaigns”**
- **“Highlight best performing campaign”**

Implementation uses:
- Keyword detection  
- Regex matching  
- Intent → UI action mapping  

No AI or LLM used — everything runs locally.

---

## 📦 Installed Dependencies

### **Production**
- @radix-ui/react-checkbox
- @radix-ui/react-slider
- @tailwindcss/vite
- chart.js
- class-variance-authority
- clsx
- lucide-react
- react
- react-chartjs-2
- react-dom
- react-icons
- react-router-dom
- recharts
- tailwind-merge
- tailwindcss-animate
- zustand

### **Dev**
- @eslint/js
- @types/node
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- autoprefixer
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- postcss
- tailwindcss
- typescript
- typescript-eslint
- vite

---

## ⚙️ Setup & Installation

### **1. Clone Repository**
```bash
git clone https://github.com/your-repo/marketing-dashboard.git
cd marketing-dashboard
```

### **2. Install Dependencies
```bash
npm install
```

### **3. Start Development Server
```bash
npm run dev
```

### **4. Build for Production
```bash
npm run build
```

### **5. Preview Production Build
```bash
npm run preview
```


### ** This project uses three Zustand stores:

campaignStore — campaign data, metrics, update logic

filterStore — handles search, dropdown filters, status filtering

promptStore — interprets natural language and triggers UI updates

These stores are independent but can interact when needed.

### ** 🌐 Deployment

Deployed on Vercel, with: Vite-optimized builds and Edge performance

## ** 📊 Performance Targets (Assignment Requirements)
Optimized to meet: 

### *** Lighthouse

- Performance ≥ 90

- Accessibility ≥ 95

- Best Practices ≥ 90

- SEO ≥ 95

### ***  Core Web Vitals

- LCP ≤ 2.5s

- CLS ≤ 0.05

- INP ≤ 200ms

### ***  Accessibility

- Keyboard navigation

- Visible focus indicators

- AA-level contrast

- Prefers-reduced-motion support

### *** SEO

- Semantic headings

- Proper meta tags

## ** ✅ Conclusion

The Marketing Intelligence Dashboard demonstrates a complete front-end engineering workflow—from architecture planning and component design to state management, UI modeling, and performance optimization. By combining React, Vite, TypeScript, Tailwind, Zustand, Radix UI, and Chart.js, the project showcases how modern tooling can produce a scalable, fast, and accessible user interface.

- Design clean, modular front-end architecture

- Build data-driven interfaces with charts, filters, and dynamic states

- Implement predictable, scalable state management (Zustand)

- Translate product requirements into high-quality UX

- Optimize for performance, accessibility, and SEO

- Deploy and ship a polished, production-ready build on Vercel



