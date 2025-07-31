# Prep Wiser AI

Prep Wiser AI is a full-stack MERN application integrated with the Gemini API to provide personalized AI-driven interview preparation. Users input their experience, topics of interest, and description to receive custom questions and session tracking.

[![View Live](https://img.shields.io/badge/View_Live-PrepWiserAI-brightgreen?style=for-the-badge&logo=vercel)](https://prepwiseai-gamma.vercel.app/)

![Home Page](https://drive.google.com/uc?export=view&id=1AQVy_YuQI0GiyJp0Ka4Fl9KqTDWjM9G1)


---

## Features

- AI-generated interview questions using Gemini API
- Personalized based on experience and topics
- Secure user authentication (JWT)
- User session tracking and history
- Responsive UI with Vite + React
- Image upload and profile customization

---

## Project Structure

### Backend — `/backend`

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── aiController.js
│   ├── authController.js
│   ├── questionController.js
│   └── sessionController.js
├── middlewares/
│   ├── authMiddleware.js
│   └── uploadMiddleware.js
├── models/
│   ├── Question.js
│   ├── Session.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── questionRoutes.js
│   └── sessionRoutes.js
├── utils/
│   └── prompts.js
├── uploads/
├── server.js
```

### Frontend — `/frontend/interview-prep-ai`

```
src/
├── components/
│   ├── Cards/
│   │   ├── ProfileInfoCard.jsx
│   │   ├── QuestionCard.jsx
│   │   └── SummaryCard.jsx
│   ├── Inputs/
│   │   ├── Input.jsx
│   │   └── ProfilePhotoSelector.jsx
│   ├── Layouts/
│   │   ├── DashboardLayout.jsx
│   │   └── Navbar.jsx
│   ├── Loader/
│   │   ├── SkeletonLoader.jsx
│   │   └── SpinnerLoader.jsx
│   ├── DeleteAlertContent.jsx
│   ├── Drawer.jsx
│   └── Modal.jsx
├── context/
│   └── UserContext.jsx
├── pages/
│   ├── Auth/
│   ├── Home/
│   ├── InterviewPrep/
│   └── LandingPage.jsx
├── utils/
│   ├── apiPaths.js
│   ├── axiosInstance.js
│   ├── data.js
│   ├── helper.js
│   └── uploadImage.js
├── App.jsx
├── index.css
├── main.jsx
```

---

## AI Integration (Gemini)

- `aiController.js` uses `prompts.js` to format user inputs into structured prompts.
- Calls Gemini API to generate custom interview questions.
- Questions are stored in MongoDB and sent to the frontend.

---

## Tech Stack

| Layer       | Technology                            |
|------------|----------------------------------------|
| Frontend    | React (Vite), Tailwind CSS             |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB (Mongoose)                     |
| AI          | Gemini API                             |
| Auth        | JWT (JSON Web Token)                   |
| File Upload | Multer                                 |

---

## Environment Variables

Create a `.env` file in `/backend`:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## Installation & Setup

### Backend

```
cd backend
npm install
node server.js
```

### Frontend

```
cd frontend/interview-prep-ai
npm install
npm run dev
```

---

## API Endpoints

### Auth Routes

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile

### Upload Image
- POST /api/auth/upload-image

### AI Generation

- POST /api/ai/generate-questions
- POST /api/ai/generate-explaination

### Questions

- POST /api/questions/add
- GET /api/questions/pin
- Update note: /api/questions/note

### Sessions

- GET /api/sessions/my-sessions
- GET /api/sessions/session-id
- POST /api/sessions/create
- DELETE /api/sessions/session-id
---

## Architecture Overview

```
Frontend (React + Vite)
|
├── Components, Pages, Context
|
├── Axios API Calls
|
▼
Express.js Backend
├── Routes (auth, questions, sessions)
├── Middleware (auth, upload)
├── Controllers (AI, auth, question, session)
|
▼
MongoDB (Users, Sessions, Questions)
▼
Gemini API (AI Prompt Generation)
```

[View Demo](https://drive.google.com/file/d/1Eq2ieZkoAGPY6a20pIbdlMh5d__rAmpe/view?usp=sharing)


---

## Author

Prep Wiser AI — Built by [Kandadi Manasa]

---

## License

This project is licensed under the MIT License.
