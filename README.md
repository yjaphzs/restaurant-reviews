# RESTAURANT REVIEWS (2018)

**Undergraduate Course Project**

**Restaurant Reviews** is a CRUD-based application designed to help users browse, rate, and review local restaurants. It aims to provide a simple platform for discovering dining spots based on user feedback and location.

The system consists of the following components:

- **Node.js + Express Backend API** to handle restaurant data and user reviews.
- **AngularJS Frontend** for a dynamic and responsive user interface.
- **MongoDB Database** to store restaurants, users, and reviews.
- **Leaflet.js** for displaying restaurant locations on an interactive map.

> ⚠️ This project is no longer maintained and serves as an archive of my early full-stack development work.

---

## 🛠️ Tech Stack

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

### Frontend
- [AngularJS](https://angularjs.org/)
- [Leaflet.js](https://leafletjs.com/) – Interactive Maps

### Programming Languages
- JavaScript
- HTML / CSS

### Database
- [MongoDB](https://www.mongodb.com/)

### Tools & Libraries
- [Mongoose](https://mongoosejs.com/) – MongoDB ODM
- [Bootstrap](https://getbootstrap.com/) – UI Styling
- [Postman](https://www.postman.com/) – API Testing

---

## 🌐 Features

### User-Facing
- Browse list of restaurants
- View restaurant details and reviews
- Submit ratings and write reviews
- View restaurants on an interactive map (focused on **San Jose City, Nueva Ecija**)

### Admin/Back-End
- Add / update / delete restaurant records
- Moderate and manage user reviews

---

## 🗺️ Map Integration

The application uses **Leaflet.js** to render a map view of restaurants. All restaurant markers are plotted and can be clicked to reveal more details.

- Centered on **San Jose City, Nueva Ecija**
- Marker-based navigation for restaurant discovery
- Lightweight and mobile-friendly GIS functionality

---

## 🚀 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/restaurant-reviews.git
    cd restaurant-reviews
2. Install backend dependencies:
    ```bash
    npm install
4. Run application
   ```bash
   node app
