# Julian Maggio — Personal Website & API

Welcome to my personal corner of the internet. This repository contains the complete source code for my website and serverless API. It serves as a space for me to showcase projects, experiment with new technologies, and host my personal web endpoints.

---

> [!NOTE]
> **Open Source & Free to Use**
> You are completely welcome to fork this repository, borrow code, adapt the design, or use it as a foundation for your own personal site. Take whatever you need!

---

## Overview

The application combines a fast single-page client built with Vite and TypeScript alongside an automated, type-safe API powered by ElysiaJS running on Vercel Serverless.

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Runtime** | Bun | Package management and local development |
| **Frontend** | Vite & TypeScript | Client-side user interface |
| **Backend API** | ElysiaJS | High-performance routing framework |
| **API Docs** | Scalar (`@elysia/openapi`) | Interactive documentation UI |
| **Deployment** | Vercel | SPA hosting and serverless function execution |

---

## Local Development

<details>
<summary><b>Click to expand setup instructions</b></summary>

<br />

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed:

```bash
curl -fsSL https://bun.sh/install | bash

```

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/julianmaggio/personal-website.git
cd personal-website

```


2. **Install dependencies:**
```bash
bun install

```


3. **Start the development environment:**
```bash
bun dev

```



### Active Local URLs

* **Client UI:** `http://localhost:5173`
* **API Base:** `http://localhost:3000/api`
* **Interactive Docs:** `http://localhost:3000/api/docs`

</details>

---

## Repository Architecture

```text
.
├── api/                  # ElysiaJS serverless application
│   ├── routes/           # Endpoint modules
│   └── index.ts          # API root entrypoint
├── src/                  # Client-side web application source
├── vercel.json           # Routing configuration for Vercel
└── package.json          # Workspace configuration & scripts

```

---

## License

This project is open-source software licensed under the **[MIT License](LICENSE)**.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies.