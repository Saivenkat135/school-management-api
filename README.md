# 📘 School Management API

This project implements a simple school management API using Node.js, Express, and MySQL.

## 🔧 Features

- Add new schools with location info
- List schools sorted by proximity to user's location

## 📦 Tech Stack

- Node.js
- Express.js
- MySQL

## 🚀 Setup

1. Clone repo
2. Configure `.env`
3. Create MySQL database (see schema)
4. Run `npm install`
5. Start server with `node server.js`

## 📬 API Endpoints

### POST /addSchool

Add a new school.

**Body**
```json
{
  "name": "ABC School",
  "address": "New Delhi",
  "latitude": 28.61,
  "longitude": 77.21
}
