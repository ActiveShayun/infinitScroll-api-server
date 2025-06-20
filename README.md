
# 📦 Infinite Scroll Backend API

A RESTful API built using **Node.js**, **Express**, and **MongoDB**, designed to support infinite scroll functionality on the frontend. The API delivers paginated user data using `take` and `skip` query parameters.

---

## 🧰 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- nodemon (for development)

---

## 📁 Folder Structure

```
infinite-scroll-backend/
├── config/
│   └── db.js               # MongoDB connection configuration
├── controllers/
│   └── userController.js   # API logic
├── models/
│   └── User.js             # Mongoose schema
├── routes/
│   └── userRoutes.js       # API route handler
├── .env                    # Environment variables
├── server.js               # Main server file
├── package.json
```

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/infinite-scroll-backend.git
cd infinite-scroll-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/infinite_scroll_db
```

> ⚠️ Make sure your MongoDB server is running locally or use a cloud MongoDB URI.

---

## ▶️ Running the Server

### Development Mode (with nodemon):

```bash
npm run dev
```

### Production Mode:

```bash
nodemon index.js
```

---

## 🔗 API Endpoint

### `GET /api/users/GetUsersList`

Fetch a paginated list of users.

#### Query Parameters

| Param | Type   | Required | Description                    |
|-------|--------|----------|--------------------------------|
| take  | Number | ✅ Yes   | Number of users to retrieve    |
| skip  | Number | ✅ Yes   | Number of users to skip        |

#### Example Request

```
GET http://localhost:5000/api/users/GetUsersList?take=10&skip=0
```

#### Sample Response

```json
{
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "image": "https://dummyjson.com/icon/emilys/128",
      "university": "University of Wisconsin--Madison",
      "company": {
        "title": "Sales Manager"
      }
    }
  ],
  "total": 208,
  "skip": 0,
  "limit": 1
}
```

---

## ⚠️ Error Handling

- Returns `400` for invalid query params.
- Returns `500` for database or server errors.
- Includes helpful error messages in JSON response.

---

## 🔍 Testing

You can test the API using:

- [Postman](https://postman.com)
- [curl](https://curl.se)
- Frontend integration (infinite scroll app)

Example:

```
GET http://localhost:5000/api/users/GetUsersList?take=10&skip=20
```

---

## 📜 Scripts

| Script        | Description               |
|---------------|---------------------------|
| `npm run dev` | Run server in dev mode    |
| `npm start`   | Run server in production  |

---

## 🙋‍♂️ Contributing

Pull requests are welcome. Please open an issue first to discuss any major changes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---




