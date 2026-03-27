# 📸 Full Stack Instagram Clone (Enterprise-Level Architecture)

A production-ready Instagram clone built using **modern full-stack architecture**, scalable backend design, and feature-based frontend structure.

🌐 **Live App:** https://full-stack-insta.onrender.com
📦 **Repository:** https://github.com/Notanormaldev/Full-stack-insta

---

## 🧠 Architecture Overview (Industry Pattern)

This project follows a **4-Layer Backend Architecture**:

```
Route → Controller → Service (logic inside controller here) → Model (DB)
```

### 🔹 Controller Layer

* Handles request & response
* Keeps logic minimal (delegates to services)

### 🔹 Service Layer *(logically implemented inside controllers)*

* Business logic (follow, like, feed generation)
* Data validation & transformations

### 🔹 Model Layer

* Mongoose schemas
* Data structure & validation

### 🔹 Database Layer

* MongoDB Atlas
* Indexed queries for performance

---

## 📁 Folder Structure

### 🔥 Backend Structure

```
Backend/
│
├── public/                # Production frontend build
├── src/
│   ├── config/           # DB connection
│   ├── controllers/      # Business logic
│   ├── middleware/       # Auth middleware
│   ├── models/           # Mongoose schemas
│   ├── Routes/           # API routes
│
├── app.js
├── server.js
```

### ⚛️ Frontend Structure (Feature-Based)

```
Frontend/src/
│
├── features/
│   ├── auth/
│   ├── follow/
│   ├── posts/
│
├── shared/
├── App.jsx
├── app.routes.jsx
```

👉 Each feature contains:

* components
* hooks
* services
* styles
* context

---

## 📸 UI Preview

### 🔐 Authentication UI

![Image](https://images.openai.com/static-rsc-4/Hc4OsR1brq6sL_bBzec0-Vo7BcxXCrGqnghscxO1UGB97lc7c9va3n_T3_6wzqzBDR-jEtCM3Y40-JFIm2VVfExx72cvMFuGIaZMWvgwbQ5AicuQK0TG1yvDAxDpGmCGsE7nqUEBhbT7B9vCaUlZpN14b4efYC7Qy9XIg3Rh6t_KUydkwQRhaFamPLgACq69?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/TfI71JEC5hajBEssyiNsgK_MFmOUT0AaK7AATODJOpD8SomcHcH99P2vt_iRHxTC3RnILfit5axSyDhktOmqTTPV39wVEkbd7yLtdKDeRC-YSUXjOGQ8PIUXZxMxBcw9swVkj7Lt3-shxQPyP4iq2fLjqPeQ9_YkW9M_TNiLOAChtN-i7StnJHcdxCefZ3F_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ssIbOF2SiggVuEFQKtTlNzovjYlzoEjYoTAzpeGu3AErZiEo2F73Y9G8taLuS9UG7UHIXRjhLliGROZPKyxX-JFZtMUQqIIJD6jNmEsf3QGJfqeQmWlig67iKKP3VIzw7aCLm9LccSHMfHm9aNz3LhabOdFTU6f5eQkn9xt7yLCrzU4UPBMWLvhknPIZiGa1?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/2wzuwOf6Y_ydMjt-996QEHMHGQYv1osNgQ7kJTQENlJ-rhORY6h68F1MuqXz4phhwdA-rrda5RDp0GgXztmt8kNBUYPnUoSfYAVnsTBmIuPhpo_TyDKsUa1I8LsX_spOUbiXJ_-Ql4kNaqohZWJsQ7kx6Wi-6fi_eYfcy1MZ_I6Jd7BeMk-oCDjq1leQc6Bt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/LsODD4EcBYqK786I4UObJtgktJTqXraxbF6ara4tcKXE7s06jCrCwwqDVw6nlKnqJb78dv4dnNmVV6WFKfKU9LO67whLVOy6sH9MQ_-lfglKSwP3rJd4IkdsQ5J0y5X5ZvSXchBUnFuavbVoNK3MGOPhIAIM4RBl7fvf0eTs9YgKmA-SKQyrfj6ghGd0WcrU?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/P0vtJrINCOHnbExOCw9xsqPO87BplnfINRW43rLStrZDIK-PHly8dprYagxd5NuHrJKiWfA29TlNLapE0URJHJQsgqPVgt2m5xPsnrvp0s46NbS0JKn42hEzzZzxUlQ1VmF8pXe2LtAAoKcWIDD5D0NE14eG9OamVuFtCa3GW1FyQuiyqE8oqMnqfGTuyKQp?purpose=fullsize)

### 🏠 Feed UI

![Image](https://images.openai.com/static-rsc-4/iWIIroQrGnhcLbeyIBRsqhNgX3vTkRpX1ll7heu07tDruESKbH4Z27Nf8GT6mPETR5DsJ184hZAVhMKic63fmvvHXiHLecGwPNHpj_7x8nUxwZmQ2EzSBNElXI3r0yVINzijRS7FhvL_5SWwY1VcMUq-pZunptS_Wj7ASb1yJHNM7uqQuLdoNRN47x0n8mpo?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/0dAfh112iaDzVJ9jMAv6iq2jlubpdcmYTo-CyTF4SRW3z5cG5nIVEUzOq1O2xSc07M8eavfWieFLwoOiE8XQx4vX7wVo5HW9gSHOhkW0z121AUqQDH9a2Ryrqa1BrLjH3pCANUfJJiAjsQxyNTHJPeL_9weJU0Cm65AwPOlqAtiO3cMPn4ks90sXESpDouUN?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Ir5c0a8g9-_7WbC0SoSABlfHy1dUwe5BXUyL4HwRAxXUAQ57izjX8WBPJC_xV5aWzrVG23GQpGaZ7JMNgtAXmyK5mZDJgAfIgzWRosAhf7kJWHs6tMUlvXDp4ePPU7ZjkSAfZktrGQ5PLc-6AIvqBDWNsjaLEX1DoiMXWMKF6jdlkh0wmkw1Y86C5s3eXz1e?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/1Tj52Rr1PIIjw_AtyNi3kHoG4ICsY9XFfBePnHwOAxztbUr-DlMF2UUJknixjhOwEVLFVnUoJ5VaORIG6ugfBbdDWcW2c1uA7w9FocOcXILL88h0eewTIoT5KV3Sg6BYlenjghQlXvRssJkE_roNmAZ8yLv5T3CIlGuIlnHvHu8-peuVc4fsPeDo4deuxwFr?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/SOQFjs_oy71X_OHnz_4P7ZHFVkatvq14uZeaTSBEWNN_QpMk41UZMUss3aqk4LCAQpOtV2078wUzbmBTq8gX2os2xDqMdtlkhGHDsOBx3Y85BiIkb01frhnwtTsAHXwJqGFzBmvA9XjifFGmWemNL_R_6r2VKCs3qLGwZHrc1XwpdsSNWF1iI6UvW0GlApan?purpose=fullsize)

### 👥 Follow System UI

![Image](https://images.openai.com/static-rsc-4/MunHy2uMU-FYQTbi5of8EtIj6pqTIkABmbYCRH5ur5yQJ2XyyGvPKnPi6CSOHqaAWhjDferkOr9Ub9odo6xl9LZkN7lbdsfTuHgrDpLjGYCeVCb6SSHWfWPEPwXzQhhKYmWuw87yg9MO6oyqMMF16fVGoAzn1wr5TV16C2BY5z1vzxRREh5tz0aw_kPi6p5f?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/q_MamIp5Q-Ygll32wniWyfCQsWGHEKyVck0yrrwJrDPDI92LvirwfBlFPLGgWvucQMqePRxAyjiO6NfYHskam2Xe0mRf8s66wkTGAAgima8P4_KCkm2YrMungAgGgB0kmKj-8FdBdO_GTRVrXNha8NJ08U6i7gv6j2SAt9XUOwsMvLOkj5iLaYDlpwpYWj9k?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/oMVhHzKUFMQqpudegbUW8x0D9vr-vEjRyX-r9A9ImuLux0CEF0rAOXTdnUNBVI6nNW9BupJNo6NDgtsiOtL_0HJPXKzBUVUKJqbIiWAWTWwj20gKxelZL_nLgZs9u1Oy1JE2twwysIbxRZsguXuv146vToIGrUq_VYxmkRsJ7g523QE0v7qH0s-19dTomnLI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-c72bzoEbrT8dAmHMHUpo8W2hN1q_veTIDqhimdThAtRVg-jOwD-oaWQhkORQRDW_UAwN6tY4UisAI1T-0cvydXnPy0Cw0W3ICfZ1BzVg6zsnDEvs0FbfrFExtnUNPwgAqn8e3066TMXNAxmMkgBSSEzZfoSq30TkUriqJUwABwDLrNA9fzEIOZ5F3vARBYd?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Jz1ZbXXMe5nTh7Tnkko80r-V1jmxPwzIvUQd5u7_juA2tC2efGTf6ikqueRfChcT_eh3T8O2USZOmODKIxRLqSzJffxW5t3Opex0Y34tIaki6WcuRbu_CDKMCgg1iTpNYsFaqutPeIHIVP9yyGEIdy0X-_a5NBPs9uEhC6pkIoOkTOHvEGzAaNn6dMqv5UpO?purpose=fullsize)

---

## 🔌 API Documentation

### 👤 Auth Routes

```
POST   /register       → Register user
POST   /login          → Login user
GET    /getme          → Get logged-in user
```

---

### 👥 Follow System

```
POST   /follow/:username        → Follow user
POST   /unfollow/:username      → Unfollow user
GET    /pending/reqs            → Get pending requests
PATCH  /accpet/:username        → Accept request
PATCH  /reject/:username        → Reject request
GET    /getfollowdets           → Followers & following
GET    /otheruser               → Other users list
```

---

### 📸 Post System

```
POST   /                → Create post (image upload)
GET    /                → Get all user posts
GET    /details/:postid → Get post details
POST   /like/:postid    → Like post
POST   /unlike/:postid  → Unlike post
GET    /feed            → Get feed posts
```

---

## 🔐 Authentication Flow

1. User logs in / registers
2. JWT token generated
3. Token stored on frontend
4. Sent via headers in every request
5. `idetifyuser` middleware validates user

---

## ⚙️ Tech Stack

### Frontend

* React.js
* Context API
* Axios
* CSS / SCSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (image upload)

---

## ⚡ Key Features

* 🔐 Secure authentication (JWT)
* 👥 Follow / unfollow system
* 📸 Image-based post creation
* ❤️ Like / Unlike system
* 🧵 Feed generation
* 📦 Feature-based frontend architecture
* 🚀 Production deployment ready

---

## 🌍 Deployment

* Backend + Frontend served together
* Express serves React build
* SPA routing handled via:

```
app.use("*", (req, res) => {
  res.sendFile("index.html");
});
```

---

## 🧪 Run Locally

```
git clone <repo>
cd Backend
npm install
npm start

cd Frontend
npm install
npm run dev
```

---

## 🔮 Future Enhancements

* Real-time chat (Socket.io)
* Notifications system
* Story feature
* AI-based feed ranking

---

## 🧑‍💻 Author

Built with ❤️ using real-world full-stack architecture principles.
