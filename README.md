# 🎬 MovieApp – TMDB Movie Explorer with Next.js

🔗 **MovieApp is a modern movie exploration application built with Next.js 13 and powered by The Movie Database (TMDB) API.**  
It allows users to browse popular, upcoming, and trending movies with dynamic detail pages, real-time search, and responsive design.

---

## 🚀 Features

- 📡 Fetches movie data from **TMDB REST API**
- 🔀 Dynamic routing and parameterized detail pages with **Next.js 13 App Router**
- 🔍 Search functionality with real-time filtering
- 🎨 Responsive UI using **Tailwind CSS**
- 🌗 Light/Dark mode toggle with **next-themes**
- ⚡ Automatic revalidation and data caching with `next: { revalidate }`
- 🧭 Clean navigation with URL-based genre filters

---

## 🛠️ Technologies Used

- **Next.js 13** (App Router)
- **React 18**
- **Tailwind CSS**
- **React Icons**
- **next-themes**
- **TMDB API**

---

## 📁 Project Structure

```bash
movieapp/
├── app/
│   ├── page.jsx             # Homepage with movie listings
│   ├── [id]/page.jsx        # Dynamic detail pages by movie ID
│   └── layout.jsx           # Global layout and theme wrapper
├── components/
│   ├── Header.jsx
│   ├── ThemeComp.jsx
│   ├── Tabs.jsx
│   └── Movies.jsx
├── public/
├── styles/
├── .env.local               # API key stored securely
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🌐 Environment Variables

To run this project, create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_v3_api_key_here
# or if using v4
NEXT_PUBLIC_TMDB_TOKEN=your_tmdb_bearer_token_here
```

---

## 🧪 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📸 Screenshots

https://github.com/user-attachments/assets/27d12757-50bf-4e10-a5cd-4ec886a5183e

---

## 📝 Project Purpose

This project was built using **Next.js 13** to interact with **TMDB API** and dynamically render movie categories such as *popular*, *upcoming*, and *trending*.  
Thanks to successful API requests and a responsive UI design, users can browse, view details by ID from URL parameters, and navigate between pages using the App Router.  
Additionally, a search filter has been developed based on input to allow users to find movies dynamically.

---

## 📩 Contact

For questions, suggestions, or collaboration:

📧 **fratsbht@icloud.com**

---

> © 2025 MovieApp • Built with ❤️ using Next.js + TMDB API
