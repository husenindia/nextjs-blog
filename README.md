# 🎵 Next.js Music Blog

A modern, responsive **Music Blog** built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. The project demonstrates modern **App Router** features including **Dynamic Routes**, **Parallel Routes**, **Intercepting Routes (Modal)**, **Error Handling**, **Custom 404 Pages**, and an elegant editorial-inspired user interface.

## 🌐 Live Demo

**🚀 Live Website:** https://nextjs-blog-husen-t.vercel.app/

**💻 GitHub Repository:** https://github.com/husenindia/nextjs-blog

---

# 📸 Preview

> *Add screenshots of the Home page, Blog page, Archive page, Blog Detail page, and Image Modal.*

---

# ✨ Features

* 🎵 Modern editorial-inspired music blog design
* 📱 Fully responsive layout
* ⚡ Built with Next.js 16 App Router
* 📰 Home page with featured articles
* 📖 Blog listing page
* 📄 Blog detail page
* 🗂️ Archive page with dynamic year filtering
* 📰 Latest blog section
* 🖼️ Full-screen image preview using **Intercepting Routes**
* 🪟 Modal image gallery with Parallel Routes
* 🚫 Custom 404 pages
* ❌ Custom Error pages
* 🎨 Editorial typography with Google Fonts
* 🏷️ Categories & Tags
* ⚙️ Optimized images with `next/image`
* 💨 Tailwind CSS styling
* 🧩 Reusable React components
* 🔍 SEO-friendly routing
* 🔥 TypeScript support

---

# 🛠️ Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### Next.js Features

* App Router
* Dynamic Routes
* Parallel Routes
* Intercepting Routes
* Route Groups
* Layouts
* Loading UI
* Error Boundaries
* Not Found Pages
* Image Optimization

### Development

* ESLint
* next/image
* next/link

---

# 📂 Project Structure

```text
app/
│
├── archive/
│   ├── @archive/
│   │   └── [[...filter]]/
│   │       ├── error.tsx
│   │       └── page.tsx
│   │
│   ├── @latest/
│   │   └── default.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── blog/
│   ├── [slug]/
│   │   ├── @modal/
│   │   │   ├── (.)image/
│   │   │   │   └── page.tsx
│   │   │   └── default.tsx
│   │   │
│   │   ├── image/
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   └── page.tsx
│
├── globals.css
├── icon.svg
├── layout.tsx
├── not-found.tsx
└── page.tsx

components/
│
├── blog/
│   ├── BlogCard.tsx
│   ├── BlogList.tsx
│   ├── BlogImageModal.tsx
│   ├── BlogHero.tsx
│   ├── BlogTags.tsx
│   └── ...
│
├── header/
├── footer/
└── ui/

lib/
│
├── blog-data.ts
└── utils.ts

public/
│
├── blog/
├── blog-post-image/
├── author/
└── logo/
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/husenindia/nextjs-blog.git
```

## Navigate to the project

```bash
cd nextjs-blog
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

# 📦 Production Build

Build the application:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

# 📖 Pages

* 🏠 Home
* 📰 Blog Listing
* 📄 Blog Detail
* 🗂️ Archive
* 🖼️ Image Preview (Modal)
* 🚫 Custom 404
* ❌ Error Page

---

# 🎯 Next.js Concepts Demonstrated

This project showcases several powerful features of the Next.js App Router:

* Dynamic Routing
* Nested Layouts
* Parallel Routes
* Intercepting Routes
* Route Groups
* Route-specific Error Boundaries
* Route-specific Not Found Pages
* Modal Routing
* Image Optimization
* Metadata API
* Server Components
* Client Components

---

# 🎨 UI Highlights

* Editorial magazine-inspired layout
* Large typography
* Soft neutral color palette
* Coral accent highlights
* Responsive design
* Elegant hover animations
* Full-screen image modal
* Modern archive navigation
* Minimalist interface

---

# 📱 Responsive Design

Optimized for:

* 💻 Desktop
* 💼 Laptop
* 📱 Tablet
* 📲 Mobile

---

# 🔮 Future Enhancements

* CMS integration (Strapi)
* Search functionality
* Category & tag filtering
* Pagination
* Newsletter integration
* User authentication
* Comments system
* Dark mode
* Social sharing
* Related articles
* Reading time estimation
* Featured articles

---

# 👨‍💻 Author

**Husen Telwala**

* GitHub: https://github.com/husenindia
* Repository: https://github.com/husenindia/nextjs-blog

---

# 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you found this project useful, please consider giving it a **Star** on GitHub!
