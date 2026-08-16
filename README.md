# 🌍 Wanderlust – Travel & Stay Listing Platform

Wanderlust is a full-stack web application inspired by modern vacation-rental platforms. It allows users to explore accommodation listings, create and manage their own listings, upload images, leave reviews, and securely authenticate using user accounts.

The project was built to strengthen practical skills in backend development, database management, authentication, cloud image storage, RESTful routing, and full-stack web application architecture.

---

## 🚀 Live Demo

🔗 **Live Website:** Add your Render URL here

🔗 **GitHub Repository:** Add your GitHub repository URL here

---

## ✨ Features

### 👤 User Authentication
- User registration and login
- Secure password authentication using Passport.js
- Session-based authentication
- Login/logout functionality
- Protected routes for authenticated users

### 🏡 Listing Management
- Create new property listings
- View all available listings
- View individual listing details
- Edit listings
- Delete listings
- Listing ownership authorization

### 🖼️ Image Upload
- Upload listing images
- Cloud-based image storage using Cloudinary
- Automatic image handling through Multer
- Image preview on listing pages

### ⭐ Reviews & Ratings
- Authenticated users can submit reviews
- Star-based ratings
- Display reviews on listing pages
- Delete reviews
- Review author information
- Validation for review submissions

### 🔐 Authorization & Security
- Authentication using Passport.js
- Authorization for listing owners
- Protected CRUD operations
- Server-side validation
- Session management
- Flash messages for user feedback

### 📱 Responsive UI
- Responsive design using Bootstrap
- Mobile-friendly layouts
- Clean and user-friendly interface
- EJS templating with reusable layouts

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap
- EJS
- EJS-Mate

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport-Local
- Express-Session

### Image Storage
- Cloudinary
- Multer
- Multer-Storage-Cloudinary

### Validation & Middleware
- Joi
- Method-Override
- Connect-Flash
- Custom Express Middleware

### Deployment
- Render
- MongoDB Atlas
- Cloudinary

---

## 📂 Project Structure

```text
Wanderlust/
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── middleware.js
├── cloudConfig.js
├── app.js
├── package.json
└── README.md