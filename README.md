# BuildSphere Infra & Engineering Works (Next.js + TypeScript)

A production-ready construction and structural engineering web platform migrated to **Next.js (App Router)** and **TypeScript**, maintaining 100% of the architectural aesthetic, live interactive calculators, real-time client tracking, AI assistant, and management portal.

---

## 🌟 Key Features

- **Interactive Construction Cost Estimator**: Real-time calculation based on project type, plot footprint, floor structure, and material quality tiers.
- **Customer Live Project Tracker**: Allows clients to track real-time milestone progress (`BSP-2024-01`, `BSP-2024-02`, etc.) from foundation to handover.
- **BuildSphere AI Construction Assistant**: Floating interactive AI assistant offering guidance on construction costs, warranties, and structural inspections.
- **Projects Portfolio & Lightbox Gallery**: Categorized showcase of residential villas, commercial complexes, structural frameworks, and luxury interiors.
- **Secure Management / Staff Portal**: Built-in dashboard for enquiry tracking, status updates, and dynamic estimator rate adjustments.
- **Responsive Mobile First**: Modern drawer navigation, responsive grids, and sticky bottom quick call/WhatsApp contact bars.

---

## 🛠️ Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript (Strict Mode enabled)
- **UI Components**: React (TSX)
- **Styling**: Modern CSS Design System with variables, glassmorphism, responsive breakpoints
- **State & Routing**: Server Components & optimized Client Components
- **Icons**: FontAwesome 6 Professional Icons
- **Typography**: Google Fonts Outfit & Plus Jakarta Sans
- **Storage**: Persistent JSON database (`data/database.json`)

---

## 📂 Project Architecture

```
real-estate/
├── public/                       # Static assets
│   ├── images/                   # High-res architectural photography
│   ├── icons/                    # Icons and SVG assets
│   └── logo.svg                  # Brand SVG logo
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # Typed backend Route Handlers
│   │   │   ├── info/route.ts
│   │   │   ├── services/route.ts
│   │   │   ├── projects/route.ts
│   │   │   ├── gallery/route.ts
│   │   │   ├── testimonials/route.ts
│   │   │   ├── estimator-rates/route.ts
│   │   │   ├── estimate/route.ts
│   │   │   ├── project-progress/[code]/route.ts
│   │   │   ├── enquiries/route.ts
│   │   │   ├── ai-chat/route.ts
│   │   │   ├── auth/route.ts
│   │   │   └── admin/
│   │   │       ├── login/route.ts
│   │   │       ├── check/route.ts
│   │   │       ├── overview/route.ts
│   │   │       ├── enquiries/route.ts
│   │   │       ├── enquiries/[id]/route.ts
│   │   │       ├── enquiries/[id]/status/route.ts
│   │   │       ├── projects/route.ts
│   │   │       ├── projects/[id]/route.ts
│   │   │       ├── project-progress/route.ts
│   │   │       ├── project-progress/[code]/route.ts
│   │   │       ├── estimator-rates/route.ts
│   │   │       └── company/route.ts
│   │   │
│   │   ├── layout.tsx            # Root layout with SEO metadata & JSON-LD
│   │   ├── page.tsx              # Interactive landing page
│   │   ├── globals.css           # Global design system & theme tokens
│   │   ├── not-found.tsx          # Custom 404 page
│   │   └── error.tsx              # Error boundary
│   │
│   ├── components/               # Modular UI components
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── modal.tsx
│   │   ├── layout/
│   │   │   ├── top-bar.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── mobile-sticky-bar.tsx
│   │   ├── forms/
│   │   │   ├── consultation-form.tsx
│   │   │   ├── contact-form.tsx
│   │   │   └── login-form.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── services.tsx
│   │   │   ├── about.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── estimator.tsx
│   │   │   ├── process.tsx
│   │   │   ├── why-us.tsx
│   │   │   ├── tracker.tsx
│   │   │   ├── gallery.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── contact.tsx
│   │   ├── modals/
│   │   │   ├── consultation-modal.tsx
│   │   │   ├── project-modal.tsx
│   │   │   ├── lightbox-modal.tsx
│   │   │   └── admin-modal.tsx
│   │   └── widgets/
│   │       ├── ai-assistant.tsx
│   │       └── floating-actions.tsx
│   │
│   ├── lib/
│   │   ├── db.ts                 # Database reader/writer
│   │   ├── auth.ts               # Admin session token manager
│   │   └── validations.ts        # Input validators
│   │
│   ├── utils/
│   │   ├── format-currency.ts    # Indian numbering (Lakhs & Crores)
│   │   └── format-date.ts        # Date formatting
│   │
│   ├── types/
│   │   └── index.ts              # Strict TypeScript definitions
│   │
│   ├── services/
│   │   └── api.ts                # Centralized typed API service client
│   │
│   └── constants/
│       └── index.ts              # Estimator defaults, contact info, nav items
│
├── data/
│   └── database.json             # Persistent application data
│
├── .env                          # Environment variables
├── .env.example                  # Example environment variables
├── .gitignore
├── next.config.ts                # Next.js configuration
├── package.json
├── tsconfig.json                 # TypeScript compiler configuration
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 🔐 Admin Portal Credentials

- **Access Point**: Footer &gt; **Staff Portal** (or click the lock icon)
- **Default Username**: `admin`
- **Default Password**: `buildsphere2024`

---

&copy; 2026 BuildSphere Infra & Engineering. All Rights Reserved.
