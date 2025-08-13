# 🧠 CodeByte Backend

This is the backend for **CodeByte**, a full-featured coding practice platform inspired by LeetCode — built entirely from scratch using **Node.js**, **Express.js**, **MongoDB**, **Redis**, and integrated with **Judge0** for real-time code execution and **Gemini AI** for doubt-solving.

---

## 🚀 Features

### 🔐 Authentication
- Secure **JWT-based** login and signup for users and admins
- Middleware for protected routes and role-based access (admin/user)

### 📘 Problem Management
- Full **CRUD operations** for coding problems
- Each problem includes metadata: title, description, difficulty, tags, examples, test cases, etc.
- Admin-only access to problem creation and editing

### 💻 Online Code Execution (Judge0)
- Integrated with **Judge0 API** to support real-time code compilation and execution in multiple languages (C++, Java, Python, etc.)
- Supports custom input and auto-evaluation using test cases
- Displays output, status, and error messages

### 🧠 Doubt Solving via Gemini AI
- Users can ask doubts in natural language
- Responses are powered by **Gemini AI**, providing contextual help and explanations

### 🎥 Video Solutions
- Admins can upload video explanations (e.g., via YouTube links)
- Videos are linked to problems and shown on frontend per problem
- CRUD operations for video content

### 💬 Submissions & History
- Track user submissions per problem
- Store success/fail status, runtime, language used
- Filter past attempts, and retry solutions

### ⚙️ Other Highlights
- **Redis caching** for faster performance on frequent API calls
- Organized **MVC architecture** for clean separation of concerns
- **Rate limiting**, **error handling**, and **input validation**
- Scalable structure for future additions like contests or discussion forums

---

## 🧪 Tech Stack

| Layer         | Technology            |
|---------------|------------------------|
| Runtime       | Node.js                |
| Framework     | Express.js             |
| Database      | MongoDB (Mongoose ORM) |
| Caching       | Redis                  |
| Auth          | JWT                    |
| Code Runner   | Judge0 API             |
| AI Assistant  | Gemini AI              |
| Video Support | YouTube (embed support)|
| Architecture  | MVC                    |

---

<!-- ## 📁 Folder Structure -->

