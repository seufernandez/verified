# Message API - Take-Home Assessment Verified.inc

This repository contains the implementation of a backend API developed as part of the take-home assessment for the Backend Engineer position at Verified.inc.

## 📌 Technologies Used

- **Language**: Node.js (TypeScript)
- **Framework**: Express
- **Database**: In Memory
- **Authentication**: Mocked
- **Other Dependencies**:
	- dotenv (Environment variable management)
	- Swagger UI for Express
	- uuid (UUID generation)
	- zod (Data validation library)

## 🚀 Setup and Execution

### 1️⃣ Prerequisites

Make sure you have installed [Node.js](https://nodejs.org/)


### 2️⃣ Installation

Clone this repository and install dependencies:

```sh
git clone https://github.com/seufernandez/verified.git

cd verified

npm install
```

### 3️⃣ Configuration

Create a `.env` file with the required environment variables (or just rename the .env.example):

```env
	NODE_ENV=development
	PORT=3000
```

### 4️⃣ Running the Application

Start the server in development mode:

```sh
npm run dev
```

## 📂 Project Structure

```
/src
	├── controllers  # API controllers
	├── services     # Business logic
	├── models       # Data models definition
	├── middlewares  # Authentication and other middlewares
	├── routes       # Route definitions
	├── config       # Application configuration
	├── errors       # Custom Errors definitions
	├── mocks        # Mock data
	├── repositories # Data access layer
	├── types        # Type definitions
	├── utils        # Utility functions
	├── validators   # Input validation schemas
```


## 📖 API Documentation

The API exposes endpoints documented via Swagger.
To access the documentation, run the application and open in your browser:

```
http://localhost:3000/api-docs
```

## 📖 Observations and Suggestions

1. **Websockets:** Use WebSockets for real-time messaging instead of polling.
2. **User Management:** Replace mocked users with UUIDs for dynamic user management.
3. **JWT Authentication:** Implement JWT to ensure secure and authorized access.
4. **Prisma and Postgres:** Efficient and scalable database solution with Prisma and Postgres.
5. **Push Notifications:** Add push notifications for real-time alerts on new messages.
6. **Unit and Integration Tests:** Add unit tests (e.g., Jest) for individual components and integration tests (e.g., Cypress) for end-to-end workflows.
7. **Hosting:** Use Vercel/Heroku for small-scale apps or AWS/GCP for large-scale apps with auto-scaling and load balancing.
8. **Monitoring:** Implement monitoring tools like Prometheus/Grafana and logging with ELK Stack.
9. **Security:** Enforce HTTPS, rate limiting, input validation, and regular security audits.

---

## 🚀 Future Enhancements

- Advanced message filtering and search.
- Group chats, message attachments, and voice/video calls.
- End-to-end encryption for enhanced security.

## 📝 Business Logic

### **1. Get Message**
- **✅ User can:** View the message if they are the owner or recipient.
- **❌ User cannot:** Access messages from other users.

### **2. Create Message**
- **✅ User can:** Create a new message.
- **❌ User cannot:** Create a message without valid content.

### **3. Update Message**
- **✅ User can:** Update the message if they are the owner.
- **❌ User cannot:** Update messages from other users or without content.

### **4. Delete Message**
- **✅ User can:** Delete the message if they are the owner.
- **❌ User cannot:** Delete messages from other users.

### **5. Reply to Message**
- **✅ User can:** Reply to a message if they are the owner or recipient.
- **❌ User cannot:** Reply to messages from other users.

## 📌 Contact

If you have any questions about the implementation, feel free to reach out:

- **Name:** Gabriel Fernandes
- **Email:** ogabrielfernandes01@gmail.com
- **LinkedIn:** [My Profile](https://linkedin.com/in/ogabrielfernandes)

---

**© 2025 - Take-Home Assessment - Verified.inc**
