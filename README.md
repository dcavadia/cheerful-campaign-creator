# 🎯 Cheerful Campaign Creator

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub](https://img.shields.io/badge/GitHub-YourUsername-181717?logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Your%20Name-0077B5?logo=linkedin)](https://www.linkedin.com/in/yourprofile/)

## 📑 Table of Contents

- [🎯 Cheerful Campaign Creator](#-cheerful-campaign-creator)
  - [📑 Table of Contents](#-table-of-contents)
  - [🌟 Overview](#-overview)
  - [🚀 Getting Started](#-getting-started)
  - [✨ Features](#-features)
  - [🗂️ Project Structure](#️-project-structure)
  - [🛠 Tech Stack](#-tech-stack)
  - [🤝 Contributing](#-contributing)
  - [👨‍💻 Author](#-author)
  - [📄 License](#-license)

## 🌟 Overview

**Cheerful Campaign Creator** is a modern, multi-step web application for creating influencer marketing campaigns. Built with Next.js and TypeScript, it provides an intuitive wizard-like interface that guides users through campaign setup, from choosing campaign types to configuring email automation and integrations.

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dcavadia/cheerful-campaign-creator
   cd cheerful-campaign-creator
   ```

1. **Install dependencies:**
   
   ```bash
   npm install
   ```
2. **Run the development server:**


   ```bash
   npm run dev
   ```

   - Then, open your browser: http://localhost:3000.

## ✨ Features

- **🎨 Modern UI/UX:** Clean, responsive design with smooth animations and transitions
- **📱 Multi-Step Wizard:** Intuitive 4-step campaign creation process with progress tracking
- **🔄 Smooth Navigation:** Seamless scrolling between steps with progress indicator
- **📤 File Upload:** Drag-and-drop file upload with support for multiple file types
- **🔗 URL Integration:** Product URL scanning for automatic campaign information extraction
- **⚙️ Smart Integrations:** Google Sheets and Shopify integration setup
- **📧 Email Automation:** Complete email campaign setup with template generation
- **🎯 Campaign Types:** Support for Seeding/Gifting, Paid Promotion, and custom campaigns
- **📊 Real-time Preview:** Live preview of campaign rules and product information
- **💾 State Management:** Persistent campaign state throughout the creation process
- **🔍 Loading States:** Engaging loading animations for better user experience
- **📱 Responsive Design:** Fully optimized for desktop, tablet, and mobile devices

## 🗂️ Project Structure

```
src/
├── app/
│   ├── campaign/
│   │   ├── layout.tsx              # Campaign layout with sidebar
│   │   └── create/
│   │       ├── page.tsx            # Main campaign creation page
│   │       ├── step-1/
│   │       │   └── Step1Content.tsx # Campaign type selection
│   │       ├── step-2/
│   │       │   └── Step2Content.tsx # Campaign information & file upload
│   │       ├── step-3/
│   │       │   └── Step3Content.tsx # Integrations setup
│   │       └── step-4/
│   │           └── Step4Content.tsx # Email setup & review
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page with redirect
├── components/
│   └── campaign/
│       └── ProgressIndicator.tsx   # Step progress indicator
├── hooks/
│   └── useCampaign.tsx            # Campaign state management
└── types/
    └── campaign.ts                 # TypeScript type definitions
```

## 🛠 Tech Stack

- **Frontend Framework:** Next.js 14 with App Router
- **Language:** TypeScript for type safety
- **UI Library:** React with custom CSS-in-JS styling
- **State Management:** React Context API with useReducer
- **File Handling:** Native File API with drag-and-drop support
- **Animation:** CSS transitions and keyframe animations
- **Layout:** CSS Flexbox and Grid for responsive design
- **Development:** Hot reload with Next.js development server
