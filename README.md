# 🔐 IntelliVault - AI Secure Document Management Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Gemini](https://img.shields.io/badge/Google-Gemini-blue?logo=google)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Storage-blue)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)
![Render](https://img.shields.io/badge/Render-Backend-purple)

</p>

---

## 📖 About

**IntelliVault** is an AI-powered document management platform that allows users to securely upload, organize, analyze, summarize, chat with, and share documents.

The application combines modern cloud technologies with Google's Gemini AI to provide intelligent document understanding while maintaining secure authentication and cloud-based storage.

---

# 🌐 Live Demo

### 🚀 Frontend

https://intelli-vault.vercel.app

### ⚙ Backend API

https://intellivault-api-518m.onrender.com

---

# ✨ Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Persistent Sessions

---

### 📄 Document Management

- Upload PDF Documents
- Upload Images
- Cloudinary Storage
- Automatic Metadata Storage
- Delete Documents
- View Document Details

---

### 🤖 AI Features

- AI Document Summary
- Automatic Title Generation
- Document Type Detection
- Smart Keyword Extraction
- AI Tag Generation
- Chat with PDF using Gemini AI

---

### 📁 Organization

- Folder Management
- Create/Delete Folders
- Move Documents
- Document Categorization

---

### 🔗 Sharing

- Generate Public Share Links
- View Shared Documents
- Share Token Support

---

### 📊 Dashboard

- Total Documents
- Storage Usage
- Upload Statistics
- AI Analytics

---

### 🎨 User Experience

- Responsive Design
- Dark / Light Theme
- Modern Dashboard UI
- Mobile Friendly

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- REST API

---

## Database

- MongoDB Atlas
- Mongoose ODM

---

## AI

- Google Gemini API

---

## Cloud

- Cloudinary

---

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```text
IntelliVault
│
├── client
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── services
│   ├── routes
│   ├── context
│   ├── hooks
│   └── utils
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── server.js
│
├── assets
├── README.md
```

---

# 📸 Application Screenshots

## 🏠 Landing Page

![](assets/landing.png)

---

## ✨ Landing Features

![](assets/landing2.png)

---

## 📈 Landing Statistics

![](assets/landing3.png)

---

## 📊 Dashboard

![](assets/dashboard.png)

---

## 📤 Upload Document

![](assets/upload.png)

---

## 📄 Document Details

![](assets/document-details.png)

---

## 🤖 AI Chat

![](assets/chat.png)

---

## 🧠 AI Summary & Analytics

![](assets/summary.png)

---

## 📈 Analytics Dashboard

![](assets/analytics.png)

---

## ⚙ Settings

![](assets/settings.png)

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Sahild-2005/IntelliVault.git
```

```
cd IntelliVault
```

---

## Backend

```
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

CLIENT_URL=http://localhost:5173
```

Run backend

```bash
npm run dev
```

---

## Frontend

```bash
cd client
npm install
```

Create a `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

---

# 🔄 Application Workflow

```
User

↓

Login / Register

↓

Upload Document

↓

Cloudinary Storage

↓

MongoDB Metadata

↓

Gemini AI Analysis

↓

Summary
Keywords
Title
Document Type

↓

Dashboard

↓

Chat with PDF

↓

Share Document

↓

Analytics
```

---

# 📌 Future Improvements

- OCR for scanned PDFs
- AI Document Translation
- Multi-language Support
- Document Versioning
- Team Collaboration
- Role Based Access
- Email Notifications
- AI Generated Flashcards
- AI Quiz Generation
- Voice-based Document Chat

---

# 👨‍💻 Author

**Sahil Dhumal**

Computer Engineering Student

Mumbai, India

GitHub

https://github.com/Sahild-2005

LinkedIn

https://linkedin.com/in/sahil-dhumal-06b961291

---

# ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

It motivates me to build more open-source projects.

---

## 📜 License

This project is licensed under the **MIT License**.
