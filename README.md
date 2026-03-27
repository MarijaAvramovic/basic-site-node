# basic-site-node
# Basic Informational Site (Node.js)

A simple Node.js project built as part of the Odin Project curriculum. This app demonstrates how to create a basic server, handle routing, and serve static HTML files without using any frameworks.

---

## 🚀 Features

* Basic HTTP server using Node.js
* Manual routing (no Express)
* Serves multiple HTML pages:

  * Home (`/`)
  * About (`/about`)
  * Contact (`/contact-me`)
  * Custom 404 page for unknown routes

---

## 🧠 What I Learned

* How Node.js handles HTTP requests and responses
* How to use the built-in `http` module
* How routing works behind the scenes
* How to read and serve files using the `fs` module
* The fundamentals before using frameworks like Express

---

## 📁 Project Structure

```
.
├── index.js
├── index.html
├── about.html
├── contact-me.html
└── 404.html
```

---

## ⚙️ How to Run

1. Clone the repository:

```
git clone https://github.com/your-username/basic-informational-site.git
```

2. Navigate into the project folder:

```
cd basic-informational-site
```

3. Run the server:

```
node index.js
```

4. Open your browser and go to:

```
http://localhost:8080
```

---

## 🌐 Routes

| Route         | Description  |
| ------------- | ------------ |
| `/`           | Home page    |
| `/about`      | About page   |
| `/contact-me` | Contact page |
| `*`           | 404 Page     |

---

## 🛠️ Built With

* Node.js
* JavaScript (ES6)

---

## 📌 Notes

This project intentionally avoids frameworks like Express to better understand how servers and routing work at a lower level.

---

## 🚀 Future Improvements

* Refactor routing logic for cleaner code
* Add CSS styling
* Implement Express.js
* Add dynamic content

---

## 📚 Acknowledgements

* The Odin Project
* Node.js Documentation

---
