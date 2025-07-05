# Bettingator App (Frontend)

Welcome to the **Bettingator App Frontend!** This project provides a modern, responsive, and accessible UI using **Vite, Tailwind CSS, Headless UI, and ShadCN**.

## 🚀 Getting Started

### Install Node.js

- Ensure you have **Node.js v22** installed.
- Download it from: [Node.js Official Site](https://nodejs.org/)

### Install Dependencies

Run the following command in the project root:

```sh
npm install
```

### 4️⃣ Start the Development Server

Launch the frontend locally with:

```sh
npm run dev
```

This will start the Vite development server. The default local URL is:

👉 [http://localhost:3010](http://localhost:3010)

---

## 🔧 Common Issues & Fixes

### 🔹 API Not Working?

- Check for content security policy in index.html
- Ensure the backend is running and reachable.
- Check your API base URL in `.env.development`.

### 🔹 Tailwind Styles Not Applying?

- Restart the dev server: `Ctrl + C`, then `npm run dev`.
- Verify that Tailwind is imported in `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 🔹 Components Not Rendering Correctly?

- Ensure **ShadCN** and **Headless UI** are installed.
- Run the following command to initialize ShadCN if needed:

```sh
npx shadcn-ui init
```

---
