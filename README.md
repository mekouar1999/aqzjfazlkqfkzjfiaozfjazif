# 🏄 Paddle Reservation Platform — MERN Stack

A **Full Stack Paddle Reservation Web Application** built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This platform allows users to **browse paddle boards, make reservations, and pay online** through a modern interface. Administrators can **manage paddles, reservations, and users** through a dedicated dashboard.

This project demonstrates a **complete full-stack architecture**, including authentication, REST APIs, database management, and payment integration.

---

# 🚀 Technical Stack

## Frontend

* React.js
* React Router
* Axios
* TailwindCSS / CSS
* Context API

## Backend

* Node.js
* Express.js
* JWT Authentication
* REST API

## Database

* MongoDB
* Mongoose

## Payment Integration

* Paddle API

## Development Tools

* Git
* GitHub
* Postman
* VS Code
* npm

---

# ⚙️ Features

## User Features

* User registration
* Secure login and logout
* Browse available paddle boards
* View paddle details
* Select reservation date and time
* Make paddle reservations
* Online payment integration
* View reservation history
* Cancel reservations

## Admin Features

* Admin authentication
* Add new paddle boards
* Edit paddle boards
* Delete paddle boards
* View all reservations
* Manage users
* Update reservation status

---

# 👤 User Stories

## Authentication

* As a **user**, I want to **create an account** so that I can reserve a paddle board.
* As a **user**, I want to **log in securely** to access my reservations.
* As a **user**, I want to **log out** to protect my account.

## Paddle Browsing

* As a **user**, I want to **see available paddle boards** so that I can choose one.
* As a **user**, I want to **view paddle details** before making a reservation.

## Reservation System

* As a **user**, I want to **select a reservation date and time**.
* As a **user**, I want to **reserve a paddle board online**.
* As a **user**, I want to **view my reservation history**.

## Payment

* As a **user**, I want to **pay securely online** using Paddle.

## Administration

* As an **admin**, I want to **add paddle boards** to the system.
* As an **admin**, I want to **edit paddle information**.
* As an **admin**, I want to **delete paddle boards**.
* As an **admin**, I want to **view and manage reservations**.
* As an **admin**, I want to **manage users**.

---

# 🗄 Database Models

## User

User

* id
* name
* email
* password
* role
* createdAt

## Paddle

Paddle

* id
* name
* description
* price
* availability
* image

## Reservation

Reservation

* id
* userId
* paddleId
* date
* time
* status
* paymentStatus
* createdAt

---

# 🛠 Installation & Setup

## Clone the Project

git clone https://github.com/yourusername/paddle-reservation-app.git
cd paddle-reservation-app

---

## Install Backend Dependencies

cd server
npm install

---

## Install Frontend Dependencies

cd ../client
npm install

---

# ⚙️ Environment Variables

Create a `.env` file inside the **server folder**.

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PADDLE_API_KEY=your_paddle_api_key

---

# ▶️ Run the Project

## Start Backend

cd server
npm run dev

## Start Frontend

cd client
npm start

---

# 🌐 Application URLs

Frontend
http://localhost:3000

Backend API
http://localhost:5000

---

# 📌 Example API Endpoints

## Authentication

POST /api/auth/register
POST /api/auth/login

## Paddles

GET /api/paddles
GET /api/paddles/:id
POST /api/paddles
PUT /api/paddles/:id
DELETE /api/paddles/:id

## Reservations

POST /api/reservations
GET /api/reservations
GET /api/reservations/:id
DELETE /api/reservations/:id

---

# 🔐 Security

* Password hashing with bcrypt
* JWT authentication
* Protected API routes
* Secure payment processing

---

# 📈 Future Improvements

* Email reservation confirmations
* Paddle availability calendar
* Admin analytics dashboard
* Mobile responsive improvements
* Multi-language support
* Stripe / PayPal payments

---

# 👨‍💻 Author

Developed as a **MERN Full Stack project** for a Paddle Reservation Platform.
