# 🗳️ Election Assistant

An interactive, premium, and non-partisan web application designed to guide Indian citizens through the entire election process — from registration to the polling booth.

🔗 **Live Production App:** [https://ssr2024me.github.io/election-assistant/](https://ssr2024me.github.io/election-assistant/)

> **Built with React 19 + Vite + Framer Motion**

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🇮🇳🇬🇧 **Bilingual Support** | Full English & Hindi support with a seamless one-click toggle. |
| 📜 **Voter Pledge** | Take a digital pledge and generate a personalized **Voter Certificate**. |
| 📞 **Official ECI Tools** | Direct integration with **1950 Helpline** and official ECI Apps (Voter Helpline, cVIGIL, KYC). |
| 🔊 **Voice Mode** | Native **Text-to-Speech** support for better accessibility. |
| ⏳ **Smart Countdown** | Automatically detects and shows the timer for the next upcoming election. |
| 🌙☀️ **Theme Engine** | Premium Dark and Light modes with a cinematic background. |
| 📍 **State-wise Guide** | Detailed data and booth finders for 20+ major Indian states. |
| 💡 **Explain Simply** | Simplifies complex electoral terms using fun, easy-to-understand analogies. |

---

## 🚀 India-Specific Utilities

- **Registration Roadmap** — Step-by-step guide for Form 6, 6B, 7, and 8.
- **EPIC Guide** — How to search your name in the electoral roll and download e-EPIC.
- **Booth Finder** — One-click access to state-specific electoral search portals.
- **Voter ID Checklist** — List of 12 alternative identity documents accepted at polls.
- **EVM & VVPAT** — Educational guide on how to use electronic voting machines correctly.

---

## 🛠️ Tech Stack

- **React 19** — Modern component-based architecture.
- **Vite 8** — Optimized build tool for lightning-fast performance.
- **Framer Motion** — Premium animations and layout transitions.
- **Lucide React** — High-quality iconography.
- **Vanilla CSS** — Custom-crafted Design System with CSS variables (Glassmorphism).

---

## 📂 Project Structure

```
election-assistant/
├── public/
│   └── election-bg.png       # Premium cinematic background
├── src/
│   ├── data/
│   │   ├── electionSteps.js  # Main election logic & roadmap
│   │   ├── translations.js   # Bilingual UI strings (EN/HI)
│   │   └── statesData.js     # State-wise data & countdown logic
│   ├── App.jsx               # Refactored robust core application
│   ├── App.css               # Premium design & theme system
│   └── main.jsx              # Entry point
```

---

## 📸 Functionality Highlights

### 🏠 Hero & Countdown
The app features a dynamic countdown that automatically updates based on the next scheduled election in India (covered up to 2030).

### 📜 Digital Voter Pledge
Users can enter their name to generate a formal **Voter Pledge Certificate**. This feature includes safety disclaimers to clarify its purpose as a digital awareness tool.

### 📍 Interactive State Guide
Provides seat counts (Lok Sabha/Assembly) and direct links to official State Election Commission websites.

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/ssr2024me/election-assistant.git

# Install dependencies
npm install

# Start the development server
npm run dev
```
The app will be running at **http://localhost:5173/** during development.

---

## ⚠️ Disclaimer

This is an **educational awareness tool** designed to simplify the election process. It is:
- ✅ Non-partisan and unbiased.
- ✅ Based on official ECI data and public information.
- ❌ NOT an official government application.
- 📜 Pledge certificates are self-generated for digital awareness and have no legal validity.

---

## 📄 License

This project is open source and available for educational purposes.

---

---

## 🎯 Challenge Submission Details

### Chosen Vertical: **Smart Civic & Educational Assistant**
This project aims to bridge the gap between complex electoral laws and the common citizen by providing a simplified, interactive, and personalized journey.

### 🧠 Approach & Logic
- **Context-Aware Pathing**: The app dynamically changes its flow based on user input. For example, if a user is not registered, it prioritizes the "Registration Roadmap"; if already registered, it shifts to "Voting Day Prep."
- **Smart Decision Making**: Uses conditional logic to provide state-specific information (seats, booth links, next election dates) from a centralized data layer.
- **Bilingual Accessibility**: Designed to be inclusive of India's linguistic diversity.

### ⚙️ Google Services Integration
- **Google Fonts Platform**: Uses 'Inter' and 'Outfit' for premium typography.
- **Google Maps Integration**: Deep-linked polling booth locators for all major Indian states.
- **Built with Google Antigravity**: Developed using Google's next-gen AI agentic coding tool.

### 📝 Assumptions Made
- The user is an Indian citizen (though global options are provided).
- The user has basic internet access to follow external official links.
- Data for future elections (2026-2030) is based on the standard 5-year legislative cycle.

---

**Made with ❤️ for a Stronger Democracy**
