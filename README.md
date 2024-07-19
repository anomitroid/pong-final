# Multiplayer Pong Game

A real-time multiplayer Pong game built with Node.js, Express, Socket.IO, and HTML5 Canvas. The task is simple. Guard your wall! Use your mouse (desktop) or touch (phone) to control the paddle and bounce the ball back before it hits the wall. 

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time multiplayer gameplay
- Room-based matches
- Responsive canvas rendering
- Client-side prediction for smooth gameplay
- Full and delta state updates for optimized network usage

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (v6.0.0 or higher)

You can check your current versions by running:

```bash
node --version
npm --version
```

## Installation

To run this project on your local machine follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to locate this project.
3. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/anomitroid/pong-final.git
   ```
4. Navigate to the project directory:
  ```bash
  cd pong-final
  ```
5. Your file structure should now look like this:
  ```
  pong-final/
  │
  ├── server/
  │   ├── server.js
  │   ├── package.json
  │   ├── package-lock.json
  │   ├── models/
  │   │   └── GameModel.js
  │   └── controllers/
  │       └── GameController.js
  │
  ├── public/
  │   ├── index.html
  │   ├── css/
  │   │   └── styles.css
  │   └── js/
  │       ├── main.js
  │       ├── models/
  │       │   └── GameModel.js
  │       ├── views/
  │       │   └── GameView.js
  │       └── controllers/
  │           └── GameController.js
  │
  └── README.md
  ```
6. Install the required dependencies: (`npm init -y` followed by `npm install`)
7. Inside `server` you should find a `node-modules` directory.
   
If you want to create your own files instead of running the files in this project, follow the following steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to locate this project.
3. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/anomitroid/pong-final.git
   ```
4. Navigate to the project directory:
  ```bash
  cd pong-final
  ```
5. Your file structure should now look like this:
  ```
  pong-final/
  │
  ├── server/
  │   ├── server.js
  │   ├── package.json
  │   ├── package-lock.json
  │   ├── models/
  │   │   └── GameModel.js
  │   └── controllers/
  │       └── GameController.js
  │
  ├── public/
  │   ├── index.html
  │   ├── css/
  │   │   └── styles.css
  │   └── js/
  │       ├── main.js
  │       ├── models/
  │       │   └── GameModel.js
  │       ├── views/
  │       │   └── GameView.js
  │       └── controllers/
  │           └── GameController.js
  │
  └── README.md
  ```
6. Navigate to the directory where you want to set up your own project.
7. Initialise a new Node.js project `your-project`:
8. Your file structure should now look like this:
  ```
  parent-directory/
  │
  ├── pong-final/
  ├── your-project/
  ```
9. Navigate inside `your-project` (`cd your-project`).
10. Create two empty directories, one for the server-side program (`server` in this project) and the other for the client-side program (`public` in this project).
  ```bash
  mkdir client-side server-side
  ```
10. Initialise a `server.js` file inside the `server-side` directory.
11. Paste the code from the file of the same name in this project in that file.
12. You can do the same with the other files or you can move the files from the cloned directory (`pong-final`) to this directory.
13. If you want to move the other directories from this project to your own project, navigate to the pong-final directory. 
    ```bash
    mv public ../your-directory/
    mv server/controllers server/models ../your-directory/server
    ```
    (On Windows, use `move` instead of `mv`)
14. Check if the structure inside `your-project` looks identical to `pong-final`.
    
