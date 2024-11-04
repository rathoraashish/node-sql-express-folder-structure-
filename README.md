# Node + SQL + Express API

This project is a simple API built with Node.js, Express, and SQL (PostgreSQL) using Sequelize as the ORM.

## Features
- Basic CRUD operations for users
- Express for routing
- Sequelize ORM for SQL database management

## Prerequisites
- Node.js (v14 or above)
- PostgreSQL database

node-sql-express-folder-structure/
├── src/                     # Main source code directory
│   ├── config/              # Configuration files
│   │   └── db.js           # Database connection setup using Sequelize
│   ├── controllers/         # Controllers for handling incoming requests
│   │   └── userController.js # Functions for user-related requests
│   ├── models/              # Database models
│   │   └── User.js          # Sequelize model for the User entity
│   ├── routes/              # API route definitions
│   │   └── userRoutes.js     # Routes for user-related API endpoints
│   ├── services/            # Business logic and service layer
│   │   └── userService.js    # Functions for user-related business logic
│   ├── utils/               # Utility functions
│   │   └── errorHandler.js    # Centralized error handling function
│   ├── validations/         # Input validation logic
│   │   └── userValidation.js  # Validation schema for user input
│   ├── app.js               # Express app configuration
│   └── server.js            # Entry point to start the server
├── .env                     # Environment variables for configuration
├── .gitignore               # Git ignore file to exclude certain files from version control
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation and setup instructions
