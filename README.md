# 🗳️ Election Assistant

An interactive, non-partisan web application that helps users understand the election process, voter registration, and voting procedures — step by step.

> **Built with React 19 + Vite + Framer Motion**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Country Selection** | India 🇮🇳, USA 🇺🇸, and General guidance |
| 📝 **Registration Roadmap** | Step-by-step guide to voter registration |
| ✅ **Interactive Checklists** | "Before Voting Day" & "On Voting Day" tasks |
| 📊 **Election Timeline** | 6-stage visual timeline from announcement to results |
| 🔍 **Myth vs Fact** | Debunks 5 common election myths |
| 💡 **Explain Simply Mode** | Easy analogies for complex processes |
| 🌙☀️ **Dark/Light Theme** | Toggle between dark and light modes |
| 🇮🇳🇬🇧 **Hindi/English** | Full bilingual support with one-click toggle |

---

## 🇮🇳 India-Specific Features

- **Form 6** — New voter registration via NVSP
- **EPIC (Voter ID)** — Step-by-step guide to get your Voter ID
- **ECI Forms Table** — Quick reference for Form 6, 6B, 7, 8, 8A
- **12 Accepted IDs** — Know what to carry on voting day
- **EVM & VVPAT** — How electronic voting works
- **Direct Portal Links** — Links to official ECI and Electoral Search portals

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above)

### Installation

```bash
# Clone the repository
git clone https://github.com/ssr2024me/election-assistant.git

# Navigate to the project
cd election-assistant

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173/** during development.

🔗 **Live Production App:** [https://ssr2024me.github.io/election-assistant/](https://ssr2024me.github.io/election-assistant/)

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
election-assistant/
├── public/
│   └── favicon.svg
├── src/
│   ├── data/
│   │   ├── electionSteps.js    # All election data (bilingual)
│   │   └── translations.js     # UI text in Hindi & English
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Component styles + theme
│   ├── index.css               # Global styles + CSS variables
│   └── main.jsx                # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack

- **React 19** — Component-based UI
- **Vite 8** — Lightning-fast dev server & bundler
- **Framer Motion** — Smooth page transitions & micro-animations
- **Lucide React** — Beautiful, consistent icons
- **Vanilla CSS** — Custom design system with CSS variables

---

## 📸 Screenshots

### 🏠 Home Page (Dark Mode)
- Premium hero section with gradient title
- Quick stats bar (96.8 Cr+ voters, 543 Lok Sabha seats)
- Interactive country selection

### 📝 Registration Roadmap
- Color-coded step cards
- Direct links to official portals (NVSP, ECI)
- "Explain Simply" mode with fun analogies

### ✅ Voting Day Checklist
- Interactive checkboxes
- Separate "Before" and "On Day" sections
- Pro tips for first-time voters

---

## ⚠️ Disclaimer

This is an **educational tool** designed to simplify the election process. It is:
- ✅ Non-partisan and unbiased
- ✅ Based on publicly available information
- ❌ NOT an official government application

Always verify deadlines and requirements with your **local Election Commission** or official sources.

---

## 📄 License

This project is open source and available for educational purposes.

---

**Made with ❤️ for Democracy**
