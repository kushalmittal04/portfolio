# 🚀 Personal Portfolio Website

## 📌 Project Overview
This is a modern, full-stack personal portfolio website built with **Next.js** and **Tailwind CSS**.  
It showcases my **skills, professional experience, projects, and credentials** in a clean and structured manner.  
The site is designed to be scalable, maintainable, and visually engaging, serving as a central hub for my work and achievements.

---

## 🔧 Tech Stack
- **Next.js** – High-performance, server-rendered React application using the App Router  
- **React** – Component-based, interactive user interface  
- **TypeScript** – Ensures code quality and type safety  
- **ShadCN UI** – Accessible, reusable, and beautifully designed UI components  
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development  
- **Nodemailer** – Backend logic for handling contact form submissions  
- **Vercel** – Seamless deployment and hosting  

---

## ✨ Features & Implementation

### 📖 Dynamic Page Structure
- **Home** – Hero section with featured projects, activities, and skills overview  
- **About** – Personal introduction, technical approach, and core strengths  
- **Experience** – Timeline of professional work history with role details  
- **Projects** – Filterable gallery with dedicated detail pages  
- **Credentials** – Certifications and achievements  
- **Education** – Academic background timeline  
- **Profiles** – Grid of online profiles across platforms  
- **Contact** – Functional contact form with email sending capability  

### 🎨 Theming & Styling
- **Multi-Theme Support** – Light, Dark, Gray, and Black themes with CSS variables and Next-Themes  
- **Responsive Design** – Mobile-first layout for all devices  
- **Consistent UI/UX** – Built using ShadCN UI components and Tailwind CSS  

### 🗄️ Data-Driven Content
- Content such as projects, work experience, and skills are stored in JSON files under `/src/data`  
- This ensures separation of **data and UI**, making updates easy without modifying core logic  

---

## ✅ Best Practices Followed
- **Next.js App Router** with Server Components for performance  
- **Component-Based Architecture** for modularity and reusability  
- **TypeScript** with strict type checking to minimize runtime errors  
- **Accessibility** with semantic HTML and ARIA attributes  
- **Secure Environment Variables** with `.env.local` and Vercel env settings  

---

## 💡 Author

- **Kushal Mittal**
- 📧 **Email**: kushalmittal2022@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/kushalmittal04](https://linkedin.com/in/kushalmittal04)
- 🧑‍💻 **GitHub**: [@kushalmittal04](https://github.com/kushalmittal04)

---


## 🔗 Live Deployment

- 🌐 **Live Demo**: [https://kushalmittal.vercel.app/](https://kushalmittal.vercel.app/)

---

## 📂 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/kushalmittal04/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Create a .env.local file in the root directory for the contact form
# (Optional, only needed for local email sending)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@example.com
SMTP_PASS=your-16-character-app-password

# Run the application locally
# Note: The development server runs on port 9002 by default
npm run dev
```
