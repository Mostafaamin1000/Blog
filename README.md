# 📝 Blog REST API

A simple blog API built with Node.js, Express, and MongoDB (Mongoose).

## 🚀 Features

- Auth (Register/Login) + JWT
- CRUD for Posts
- Comments on Posts
- Like / Unlike Posts
- Upload Images (Multer)
- Pagination + Search + Filter
- Admin Controls (Delete Any User / Post / Comment)

## 🧪 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (Image Upload)
- JSON Web Tokens
- Render (Deployment)

## 📁 API Endpoints

| Method | Route                          | Desc                       |
|--------|-------------------------------|----------------------------|
| POST   | /api/register                 | Register new user          |
| POST   | /api/login                    | Login                      |
| GET    | /api/posts                    | Get all posts (paginated) |
| POST   | /api/posts                    | Create post (auth)         |
| PUT    | /api/posts/:id                | Update post (auth)         |
| DELETE | /api/posts/:id                | Delete post (auth/admin)   |
| PUT    | /api/posts/:id/like           | Like a post (auth)         |
| PUT    | /api/posts/:id/unlike         | Unlike a post (auth)       |
| POST   | /api/posts/:id/comments       | Add comment (auth)         |
| GET    | /api/posts/:id/comments       | Get post comments          |
| PUT    | /api/comments/:id             | Update comment (auth)      |
| DELETE | /api/comments/:id             | Delete comment (auth/admin)|
| POST   | /api/posts/upload             | Upload image               |
| GET    | /api/admin/users              | Get all users (admin)      |
| DELETE | /api/admin/users/:id          | Delete user (admin)        |

## 📸 Sample Post with Image

```json
{
  "title": "Node.js + MongoDB",
  "body": "This is a blog post example",
  "image": "/uploads/xyz.jpg"
}

