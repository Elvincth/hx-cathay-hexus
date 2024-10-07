Based on the provided information and the project details from the slides, here's a rewritten GitHub README for the HX-Cathay Pacific MILES+ project, enhanced with emojis and detailed information:

---

# ✈️ HX-Cathay Pacific - MILES+ Project

Welcome to the **MILES+** project repository! 🚀 This initiative, developed by **Group 1 HEXUS**, aims to revolutionize the Asia Miles experience, transforming it into a more dynamic and engaging daily currency. Here, you'll find everything you need to understand the project setup, development, and deployment.

## 🌟 Project Overview

The **MILES+** project addresses key challenges in the Asia Miles loyalty program, such as the underutilization of miles and limited user engagement. By offering innovative solutions, **MILES+** aims to make Asia Miles more versatile and integrated into daily routines, ultimately enhancing the overall user experience.

### 🔍 Identified Challenges
1. **Unused Miles**: A significant portion of Asia Miles remains inactive due to limited engagement opportunities.
2. **Low User Engagement**: Users often find it difficult to interact regularly with the loyalty program due to a lack of daily utility and diverse redemption options.

### 🎯 Project Goal
Our mission is to **elevate user engagement** with Asia Miles by:
- Integrating it seamlessly into everyday activities.
- Expanding the scope of earning and redemption opportunities.

### 🚀 Innovative Features

#### 🌱 MILES GROWTH
- A time-based mileage growth scheme that encourages daily interactions through **personalized missions**.
- Users can allocate their miles to growth plans (e.g., 3 or 6 months) and achieve higher growth rates through regular engagement.
- **Dynamic Growth Rates**:
  - **Base Rate**: 1.5%
  - **Maximum Rate**: Up to 3% with consistent participation over six months.
  
#### 🔗 MILES CONNECT
- A **global exchange network** that allows users to convert their Asia Miles across multiple airline loyalty programs.
- Built on a secure API framework, it integrates with various airline systems to facilitate smooth mile exchanges.
- Expands the flexibility of miles, offering more redemption scenarios and making Asia Miles more versatile for users.

---

## 🛠️ Getting Started

Follow the steps below to set up the project and start developing.

### 📁 Environment Setup

1. Copy the `env.example` file and rename it to `.env`.

### 🚀 Dev Commands

```bash
# Install dependencies
pnpm i

# Run all in watch mode
pnpm dev
```

This will start the development environment for both the frontend and backend, making it easier to test and iterate.

---

## 📦 Deploying to Production

When you're ready to deploy the **MILES+** project, use the following commands:

```bash
# Build the frontend for production
turbo build --filter frontend

# Build the backend for production
turbo build --filter backend

# Run the backend in production mode
turbo start --filter backend
```

### 🌐 Live Links
- **Frontend**: [MILES+ Frontend](https://milesplus.netlify.app/)
- **Backend**: [MILES+ Backend](https://hx-cathay-production.up.railway.app/)

---

## 🤝 Contributing

We welcome contributions to the **MILES+** project! Feel free to submit issues, suggest new features, or create pull requests to help us make Asia Miles more engaging and versatile for all users.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
