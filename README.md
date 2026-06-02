Nutriorg is a full-stack e-commerce platform built using the MERN stack. The application allows users to browse products, manage their cart, securely complete purchases through Stripe, and manage orders through a responsive and user-friendly interface.

FEATURES:-
User Authentication & Authorization
User credentials updation
Product Listing and Details
Shopping Cart Functionality
Secure Stripe Payment Integration
Order Placement and Management
Responsive User Interface
RESTful API Architecture
MongoDB Database Integration
State Management with React

Tech Stack :-
Frontend: React, Vite, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Payment Gateway: Stripe

Installation
git clone https://github.com/puneetjas35/Nutriorg.git
cd Nutriorg

Install dependencies:

cd client
npm install

cd ../server
npm install

Create a .env file in the server folder:

FRONTEND_URL=
PORT=
MONGODB_URI=
SECRET_KEY_ACCESS_TOKEN=
SECRET_KEY_REFRESH_TOKEN=
RESEND_API=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET_KEY=
STRIPE_SECRET_KEY=
STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY=

Run the application:

# Backend
cd server
node server.js

# Frontend
cd client
npm run dev


Author
Puneet

GitHub: https://github.com/puneetjas35

Backend: Node.js, Express.js, MongoDB

Payment Gateway: Stripe
