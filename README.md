# KAEVI Solutions — GCC-Focused Global Workforce Platform

> **"Talent for the mandates that matter."**  
> A GCC-focused workforce partner built around capability, quality, and accountable hiring execution.

Official Website: [https://kaevi.net](https://kaevi.net)

---

## 🏛️ Strategic Architecture & Compound Thinking

This platform is engineered using **Compound Engineering Principles** to address the unique realities of the **Global Capability Center (GCC)** ecosystem in India and across global hubs (MENA, Europe, US, APAC).

### 1. The Macro GCC Context
* **2,117 GCCs in India** (FY2026 Zinnov-Nasscom Landscape).
* **2.36 Million Professionals Employed**, managing mission-critical enterprise engineering.
* **87% of Centers Manage End-to-End Global Processes** (EY GCC Pulse Survey 2025).
* **Core Shift**: India is no longer an offshore delivery shop; GCCs now own global P&L systems, AI/ML transformation, and architectural governance.

### 2. Solving The Four Systemic Frictions
1. **Rare Skill Combinations**: Technical depth + domain context + executive business judgment.
2. **Speed vs. Confidence**: Rapid time-to-fill without diluting the engineering bar.
3. **Offer-to-Join Uncertainty**: 60–90 day notice periods, counteroffer sensitivity, and multi-offer drops.
4. **Unpredictable Ramp-ups**: Dynamic scaling as product roadmaps expand.

### 3. The KAEVI Operating Model
* **Business Needs First. Talent Strategy Follows**: We start with the architecture, team culture, and delivery deadlines.
* **Quality by Design ("No Resume Dumping")**: 5-Point Candidate Diagnostic (`fit • evidence • constraints • risk • next step`).
* **Visible Delivery Governance**: Weekly Hiring Review Scorecards, named single ownership, and SLA enforcement.
* **90-Day Pilot Framework**: Low-friction proof of capability on real mandates (Align → Activate → Convert → Optimise).

---

## 🎨 Design System & UI/UX Standards

Built in adherence to **UI/UX Pro Max** and **Taste Skill (Anti-Slop)** guidelines:

* **Visual Identity**: High-tech GCC Command Center aesthetic with deep midnight obsidian (`#070B14`, `#0B1322`), slate borders, and electric cyan/sapphire glow accents (`#00F0FF`, `#38BDF8`).
* **Typography**: Clean typographic pairing using Google Fonts:
  * **Outfit**: Geometric, modern high-contrast titles and numerical metrics.
  * **Plus Jakarta Sans**: Balanced, human-readable executive body copy.
  * **JetBrains Mono**: Telemetry metrics, SLA badges, and system identifiers.
* **Interactive Elements**:
  * **Live GCC Radar Telemetry**: Animated concentric radar visualizing talent clusters across Bengaluru, Hyderabad, Pune, NCR/Gurgaon, and Chennai.
  * **Live Metric Counters**: Smooth animated count-up for macro GCC metrics with `IntersectionObserver`.
  * **Talent Practice Matrix**: Deep dives into AI/Data, Product & Engineering, Cloud SRE, AppSec, Enterprise Apps (SAP/Salesforce), and Operations.
  * **4 GCC Lifecycle Moments**: Interactive stage switcher for *Establish*, *Expand*, *Transform*, and *Sustain*.
  * **Live Weekly Scorecard Simulator**: Interactive toggle comparing Weekly Delivery reviews with Monthly Strategic Business reviews.
  * **Interactive 90-Day Pilot Stepper**: Milestone-by-milestone deliverables roadmap.
  * **Mandate Calibration Engine (Modal)**: Instant mandate intake wizard for GCC leaders with automated confirmation.
* **Accessibility**: Fully keyboard accessible (`tabindex`, focus rings, `Escape` key handling), WCAG 2.1 AA contrast compliance, semantic markup, and `prefers-reduced-motion` support.

---

## 🚀 Quick Start / Local Preview

The website is standalone and runs without any build steps or third-party dependencies:

### Option A: Open directly in your browser
Double-click `index.html` or open it directly in Safari, Chrome, Edge, or Firefox.

### Option B: Local Python HTTP Server
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option C: Node / NPX
```bash
npx serve .
```

---

## 📁 File Structure

```
KAEVI SOLUTION/
├── index.html              # Main high-performance landing experience
├── package.json            # Project manifest & run scripts
├── README.md               # Architecture documentation
├── css/
│   └── style.css           # Tokens, glass panels, animations & accessibility
├── js/
│   └── main.js             # Interactive telemetry, stepper, tabs & calibration modal
└── assets/
    └── logo.svg            # Exact vector SVG brand logo with cyan & sapphire chevrons
```
