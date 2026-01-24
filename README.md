# ✍️ WriteWise

**An AI-powered writing improvement platform that helps users develop better communication skills through deliberate practice and intelligent feedback.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

---

## 🎯 How This Helps Users

WriteWise addresses a common problem: **people struggle with written communication**. Generic grammar checkers focus on syntax, but don't teach effective communication.

**WriteWise helps users:**
- **Practice writing** in real-world scenarios (emails, essays, professional docs)
- **Get AI feedback** on clarity, tone, structure, and effectiveness
- **Track progress** over time to see measurable improvement
- **Learn by doing** through structured practice, not just reading tips

**Who benefits:**
- Students improving essay writing and communication
- Job seekers practicing professional emails and cover letters
- Professionals refining workplace communication
- Non-native speakers building confidence in written English

---

## 🛠️ Technologies Used

### **Frontend**
- **Next.js 14** (App Router) - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling for responsive design

### **Backend**
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database access and migrations
- **PostgreSQL** - Relational database for user data and progress tracking

### **AI & Analysis**
- **Local LLM (Ollama / LM Studio)** – Primary analysis engine for privacy-first, low-cost AI evaluation
- **Gemini API (Google)** – Automatic fallback when local LLM is unavailable
- **LLM Router** – Smart provider selection with graceful fallback and unified error handling
- Custom prompt engineering for writing evaluation and feedback generation


### **Authentication**
- **Clerk** - Secure user authentication and session management

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Git** - Version control

---

## ✨ Key Features

### 📝 Writing Practice Mode
Users write on any subject and receive detailed AI analysis covering:
- **Clarity** - Is the message clear and understandable?
- **Structure** - Is information organized logically?
- **Tone** - Does it match the intended audience?
- **Actionable feedback** - Specific suggestions for improvement

### 📧 Professional Email Scenarios
Pre-built email writing tasks with real-world contexts:
- Late delivery responses
- Help requests
- Professional updates
- Customer service situations

Each scenario includes:
- **Audience** (boss, colleague, customer)
- **Tone guidance** (formal, friendly, apologetic)
- **Purpose** (inform, request, persuade)
- **Example emails** for reference

### 🤖 AI-Powered Analysis
Smart evaluation that:
- Analyzes writing without storing raw submissions (privacy-first)
- Provides constructive feedback, not just corrections
- Adapts to different writing contexts and goals
- Saves analysis results for logged-in users to track improvement

### 📊 Progress Tracking
- View past analyses and feedback
- See improvement trends over time
- Identify recurring areas for growth

---

## 🏗️ Project Architecture

```
src/
├── app/
│   ├── write/              # Free writing practice interface
│   ├── email/              # Email scenario selection and practice
│   ├── api/                # Backend API routes
│   │   ├── analyze/        # AI writing analysis endpoint
│   │   └── tasks/          # Email task data
│   └── components/         # Reusable UI components
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   └── langchain.ts        # LangChain configuration
└── types/                  # TypeScript type definitions

prisma/
├── schema.prisma           # Database schema (User, Analysis, Progress)
└── seed.ts                 # Seed data for email scenarios
```

---

## 🚀 How It Works

1. **User selects practice type** (free writing or email scenario)
2. **User writes** based on the prompt or scenario
3. **Submits to AI** via Next.js API route
4. **AI analyzes** clarity, tone, structure, effectiveness
5. **Feedback displayed** with specific improvement suggestions
6. **Analysis saved** to PostgreSQL (for logged-in users)
7. **Progress tracked** over multiple sessions

---

## 💡 Technical Highlights

- **Type-safe full-stack** with TypeScript across frontend and backend
- **Server components** for optimized performance and SEO
- **Privacy-focused AI** using local LLM instead of cloud APIs
- **Scalable database design** with Prisma for easy schema evolution
- **Secure authentication** with Clerk's battle-tested solution
- **Responsive design** that works on mobile, tablet, and desktop

---

## 📄 License

MIT License - feel free to use this project for learning or building your own version.

---

## 🙌 Built By

**Vishal Nanaware**  
Full-stack developer focused on building practical tools that help people improve real-world skills through technology.

[GitHub](https://github.com/wiishal) • [Portfolio](https://vishal-nanaware.vercel.app/) • [LinkedIn](https://www.linkedin.com/in/vishal-nanaware/)

---

<div align="center">
⭐ Star this repo if you find it helpful!
</div>