# InternPortal_FullStack

```markdown
# 🧑‍💻 Intern Portal – Full Stack Project

This project is a basic intern dashboard created as part of a full stack assignment. It features a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express that serves mock intern data through a simple REST API.

---

## 🚀 Features

### 👨‍🎓 Intern Dashboard
- Dummy login/signup page (no real authentication)
- Displays intern name
- Dummy referral code (e.g., `kanhaiya2025`)
- Total donations raised (fetched from backend)
- Static rewards/unlockables section

### 🏆 Bonus
- Static leaderboard page showing top interns

---

## 🛠️ Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Frontend  | HTML, CSS, JavaScript |
| Backend   | Node.js, Express   |
| API       | REST API (mocked)  |
| Hosting   | Netlify (frontend), Render/Cyclic (backend) |

---

## 📁 Project Structure

```

InternPortal\_FullStack/
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── leaderboard.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   └── package.json

````

---

## ⚙️ Setup Instructions

### 🔹 Backend (Node.js + Express)
1. Navigate to the backend folder:
   ```bash
   cd backend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. The server will start at:

   ```
   http://localhost:3000/api/intern
   ```

---

### 🔹 Frontend

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Open `index.html` in a browser:

   * Click the login button → loads dashboard
   * Dashboard fetches data from backend API
   * Leaderboard is static

---

## 🌍 Deployment Options

| Layer    | Free Hosting Option           |
| -------- | ----------------------------- |
| Frontend | Netlify, Vercel, GitHub Pages |
| Backend  | Render, Railway, Cyclic       |

---

## 📞 API Endpoint Example

`GET /api/intern` returns:

```json
{
  "name": "Kanhaiya Jangid",
  "referralCode": "kanhaiya2025",
  "donationAmount": 8500
}
```

---

## 📸 Screenshots

| Login Page                      | Dashboard Page                          | Leaderboard Page                            |
| ------------------------------- | --------------------------------------- | ------------------------------------------- |
| ![Login](screenshots/login.png) | ![Dashboard](screenshots/dashboard.png) | ![Leaderboard](screenshots/leaderboard.png) |

*(Optional: Add your own screenshots to the `screenshots/` folder)*

---

## 👨‍💻 Author

**Kanhaiya Lal Jangid**
[GitHub Profile](https://github.com/kanhaiya304)

---

## 📄 License

This project is free to use and distribute for educational purposes.


