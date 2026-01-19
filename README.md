# ✍️ WriteWise

**An AI-powered writing platform that helps you improve communication through practice and feedback.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Demo](#) • [Getting Started](#-getting-started) • [Features](#-features)

---

## 🎯 What It Does

WriteWise helps you **write better** through structured practice and AI-powered feedback. Instead of just chatting with AI, you actively improve your writing skills.

**Practice writing:**
- General topics with AI analysis
- Professional emails for real-world scenarios
- Structured communication with targeted feedback

**Get AI feedback on:**
- Clarity and structure
- Tone matching
- Areas for improvement

**Track your progress** over time (for authenticated users)

---

## ✨ Features

### 📝 Writing Practice
Write on any subject and receive detailed AI analysis on clarity, structure, and expression.

### 📧 Email Scenarios
Practice professional emails with predefined tasks:
- Late delivery responses
- Help requests
- Information sharing
- Professional updates

Each scenario includes audience, tone, purpose, and example emails for guidance.

### 🤖 Smart Analysis
AI evaluates your writing and provides actionable feedback without storing your raw submissions (analysis only saved for logged-in users).

### 📊 Progress Tracking
Monitor your improvement over time with personalized analytics.

---

## 🛠️ Tech Stack

**Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS  
**Backend:** Next.js API Routes, Prisma, PostgreSQL  
**AI:** LangChain.js, Gemini API  
**Auth:** Clerk

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/wiishal/WriteWise.git
cd WriteWise

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Clerk, database, and AI API keys

# Run database migrations
npx prisma migrate dev
npx prisma db seed

# Start development server
npm run dev
```

Visit `http://localhost:3000` and sign in to start practicing.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── write/         # Writing practice interface
│   ├── email/         # Email scenarios
│   ├── api/           # Backend API routes
│   └── components/    # Reusable UI components
├── lib/
│   └── prisma.ts      # Database client
└── types/             # TypeScript definitions

prisma/
├── schema.prisma      # Database schema
└── seed.ts           # Seed data for email tasks
```

---

## 🗺️ Roadmap

- [ ] Level-based writing challenges
- [ ] Essay writing with reference materials
- [ ] AI sentence highlighting
- [ ] Progress dashboard with analytics
- [ ] Multiple writing style support
- [ ] Collaborative feedback system

---

## 💡 Why This Project?

Originally a multi-AI chatbot experiment, I realized the real value wasn't in conversations—it was in **helping people communicate better**. This pivot focuses on what actually matters: **deliberate practice with meaningful feedback**.

Writing forces you to organize thoughts, choose words carefully, and adapt tone—skills that translate to better communication everywhere.

---

## 📄 License

MIT License - feel free to use this project for learning or building your own version.

---

## 🙌 Author

**Vishal Nanaware**  
Building tools that help people improve communication through technology.

[GitHub](https://github.com/wiishal) • [Portfolio](#) • [LinkedIn](#)

---

<div align="center">
⭐ Star this repo if you find it helpful!
</div>

---

**Key improvements:**
- ✅ Badges at the top (looks professional)
- ✅ Removed wordy sections
- ✅ Added quick links for navigation
- ✅ More scannable formatting
- ✅ Better code block formatting
- ✅ Added "Why This Project?" to tell your story
- ✅ Roadmap uses checkboxes (cleaner)
- ✅ Condensed tech stack to one line
- ✅ Added placeholders for demo, portfolio, LinkedIn
- ✅ Call-to-action at the end

**Replace these before pushing:**
- `[Live Demo](#)` - add your deployed URL
- `[Portfolio](#)` and `[LinkedIn](#)` - add your actual links
- Create `.env.example` file with necessary variables
- Add screenshots to make it even better

Want me to create the `.env.example` file or add a screenshots section?