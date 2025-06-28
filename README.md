# 📝 iNotebook – Your Personal Cloud Notebook
---

## 🚀 About iNotebook

**iNotebook** is a modern, full-stack MERN (MongoDB, Express, React, Node.js) application that lets you securely create, edit, and manage your notes from anywhere. With a beautiful UI, instant alerts, and robust authentication, iNotebook is your perfect digital notebook companion!

---

## ✨ Features

- 🔒 **Authentication:** Secure signup & login with JWT
- ☁️ **Cloud Storage:** Access your notes from any device
- 📝 **Rich Note Management:** Add, edit, and delete notes with tags
- 🎨 **Beautiful UI:** Responsive, modern design with gradients & smooth UX
- ⚡ **Instant Alerts:** Get feedback for every action (add, update, delete)
- 🌓 **Sticky Navbar:** Easy navigation, always accessible
- 📱 **Mobile Friendly:** Works great on all screen sizes

---

## 🖥️ Tech Stack

- **Frontend:** React, Bootstrap 5, Context API
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **State Management:** React Context API

---

## 🚦 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/inotebook.git
cd inotebook
```

### 2. Install dependencies

#### For backend:
```sh
cd backend
npm install
```

#### For frontend:
```sh
cd ../
npm install
```

### 3. Set up environment variables

- Create a `.env` file in the `backend` folder with your MongoDB URI and JWT secret.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend server

```sh
cd backend
npm start
```

### 5. Start the frontend

```sh
cd ..
npm start
```

---

## 🛡️ Security

- Passwords are hashed and never stored in plain text.
- JWT is used for secure authentication.
- Protected routes ensure only logged-in users can access their notes.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)

---

> **iNotebook** – Take your notes everywhere, securely and in style!  
> _Made with ❤️ using the MERN
