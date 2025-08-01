# MsCafe ☕️

MsCafe was founded with a simple mission: to serve the best coffee in town. Our passion for quality beans and expert brewing techniques has made us a favorite among coffee enthusiasts. We source our beans from sustainable farms around the world, ensuring that every cup of coffee you enjoy is not only delicious but also ethically produced.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

MsCafe is a web application that offers an elegant, user-friendly interface for browsing our extensive coffee menu, placing online orders, and learning about our sustainably sourced beans. Whether you’re looking to order your favorite brew or learn more about coffee origins, MsCafe provides an excellent user experience for every coffee lover.

## Features
- **Browse Menu:** Explore our coffee varieties with detailed descriptions and pricing.
- **Sustainability Info:** Learn about our ethical sourcing and the farms we partner with.
- **Responsive Design:** The website is fully responsive for desktops, tablets, and mobile devices.
- **Order Coffee:** Add items to your cart and place orders (future feature).

## Tech Stack
- **Frontend:** React, CSS
- **State Management:** React Context API
- **Backend:** Node.js, Express (planned for future)
- **Database:** MongoDB (planned for future)

## Installation

### Prerequisites
Before you begin, ensure you have installed the following:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- MongoDB (local or Atlas)
- Google Cloud Console project

### Setup
Follow the steps below to set up the project locally:

#### Step 1: Clone the repository
```bash
# Clone the MsCafe repository

git clone https://github.com/your-username/coffeeShop.git

# Navigate into the project directory
cd coffeeShop
 # Install the required npm packages
npm install

git clone https://github.com/Mujtabaa07/coffeeShop.git
```
```bash
# Navigate into the project directory
cd coffeeShop
```

### Step 2: Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set authorized JavaScript origins: `http://localhost:3000`
6. Set authorized redirect URIs: `http://localhost:5001/api/auth/google/callback`
7. Copy Client ID and Client Secret

### Step 3: MongoDB Atlas Setup

#### 1. Create Account
- Go to MongoDB Atlas
- Click "Try Free"
- Sign up with email or Google
- Verify your email address

#### 2. Create Cluster
- Choose deployment: Select "Shared" (Free tier)
- Cloud Provider: Choose AWS, Google Cloud, or Azure
- Region: Select closest to your location
- Cluster Name: mscafe-cluster (or your preferred name)
- Click "Create Cluster" (takes 3-5 minutes)

#### 3. Create Database User
- Go to "Database Access" in left sidebar
- Click "Add New Database User"
- Authentication Method: Password
- Username: mscafe-admin
- Password: Generate secure password or create your own
- Database User Privileges: Select "Read and write to any database"
- Click "Add User"

#### 4. Configure Network Access
- Go to "Network Access" in left sidebar
- Click "Add IP Address"
- For Development: Click "Allow Access from Anywhere" (0.0.0.0/0)
- For Production: Add your server's specific IP
- Click "Confirm"

#### 5. Get Connection String
- Go to "Clusters" and click "Connect"
- Choose "Connect your application"
- Driver: Node.js
- Version: 4.1 or later
- Copy connection string

### Step 4: JWT_SECRET
```bash
# Run this cmd in your backend directory

node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(64).toString('hex'))" 
```

### Step 5: SESSION_SECRET
```bash
# Run this cmd in your backend directory

node -e "console.log('SESSION_SECRET=' + require('crypto').randomBytes(64).toString('hex'))"
```

## Installation
### 1. Install frontend dependencies
```bash
  npm install
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
# Fill in your Google OAuth credentials and MongoDB URI
```

### 4. Start MongoDB (if running locally)

### 5. Run the application
```bash
# Run both frontend and backend
npm run dev

# Or run separately:
# Backend: cd backend && npm run dev
# Frontend: npm start
```
Once the server is running, you can view the app at (http://localhost:3000).


## Usage
**To use the app:**
- **View Coffee Menu:** Browse through the available coffee items on the homepage.
- **Learn About Coffee:** Check out the sourcing section to learn more about our sustainably sourced beans.
- **Place an Order:** In future releases, you'll be able to add items to the cart and complete orders.

## ScreenShots
## **Home Page:** 
![homepage](https://github.com/user-attachments/assets/2dc9b51d-ce06-4eb6-89fb-774867ede12c)
## **Coffee Menu:**
![coffeemenu](https://github.com/user-attachments/assets/014c6a7a-03ab-4bdf-88e1-bb3c11d66447)
## **Login Page**
![coffeelogin](https://github.com/user-attachments/assets/c6c7c645-475d-4658-a47c-f0ada0b177d1)
## **Testimonials**
![testimonials](https://github.com/user-attachments/assets/38d811e3-4acc-4901-9a3d-8e4185c96a2c)

## Contributing
We welcome contributions! Follow the steps below to contribute to this project:
```bash
# Click the "Fork" button at the top-right of the repository page to create a copy in your GitHub account.
```
```bash
# Clone the forked repository to your local machine
git clone https://github.com/Mujtabaa07/coffeeShop.git
```
```bash
# Navigate into the project directory
cd coffeeShop
```
```bash
# install dependencies
npm install (or) npm i
```
```bash
# Create a new branch for your feature or fix
git checkout -b feature/your-feature-name
```
```bash
# Make Your Changes
Make sure your changes adhere to the project standards and structure.
# Stage all changes
git add .
```
```bash
# Commit the changes with a descriptive message
git commit -m "Description of the feature or fix"
```
```bash
# Push your branch to your forked repository
git push origin feature/your-feature-name
```
```bash
# Go to the original repository on GitHub and open a new Pull Request
# Provide a clear description of your changes in the Pull Request.
```


<div>
  <h2 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" width="35" height="35"> Our Contributors</h2>
  <div align="center">
    <h3>Thank you for contributing to our project</h3
<p align="center">
      <a href="https://github.com/Mujtabaa07/coffeeShop/graphs/contributors">
        <img src="https://api.vaunt.dev/v1/github/entities/Mujtabaa07/repositories/coffeeShop/contributors?format=svg&limit=54" width="700" height="250" />
      </a>
 </p>
<a href="https://github.com/Mujtabaa07/coffeeShop/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Mujtabaa07/coffeeShop&max=300" />
</a>
    


  </div>
</div>


<h3 align="center"> Happy Coding ☕️</h3>
