# Multiplayer Pong Game

A real-time multiplayer Pong game built with Node.js, Express, Socket.IO, and HTML5 Canvas. The task is simple. Guard your wall! Use your mouse (desktop) or touch (phone) to control the paddle and bounce the ball back before it hits the wall. 

<div align="center">
  <p float="left">
    <img src="https://github.com/user-attachments/assets/5177da34-d52c-4cf3-b725-ede378cf8e51" width="400" />
    <img src="https://github.com/user-attachments/assets/b6ff1d56-55d9-4c10-a8be-6acdc052889b" width="400" /> 
  </p>
</div>



## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [Contributing](#contributing)



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

### To run this project on your local machine follow these steps:

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
7. Inside `server` you should find a `node_modules` directory.

   
### If you want to create your own files instead of running the files in this project, follow the following steps:

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
11. Initialise a `server.js` file inside the `server-side` directory.
12. Paste the code from the file of the same name in this project in that file.
13. You can do the same with the other files or you can move the files from the cloned directory (`pong-final`) to this directory.
14. If you want to move the other directories from this project to your own project, navigate to the pong-final directory. 
    ```bash
    mv public ../your-directory/
    mv server/controllers server/models ../your-directory/server
    ```
    (On Windows, use `move` instead of `mv`)
15. Check if the structure inside `your-project` looks identical to `pong-final`. The `client-side` should look identical to `public`.
16. If you followed the `mv` command as above, you will find 2 files extra in `server` which you will not find in `server-side`. If you copy pasted every file, then these 2 files will be         present in `server-side` as well. These 2 files are `package.json` and `package-lock.json`.
17. If you have these 2 files, install the dependencies:
    ```bash
    npm install
    ```
18. If you do not have these files, do the following:
    ```bash
    npm init -y
    npm install express socket.io uuid
    ```
19. After this command, your final file structure should be exactly similar to `pong-final` with just 1 directory extra inside `server-side` in `your-project`. This is the `node_modules` 
    directory.



## Usage

To start the game server:

1. In the project directory (`pong-final` or `your-project`), run:
   ```bash
   cd server
   node server.js
   ```
2. Open a web browser and go to `http://localhost:42030` (or the port specified in your console output).
3. The game should now be running in your browser. Enjoy playing!
4. If you want to make any changes locally, you need to restart the server to see the effect of the changes you made (`ctrl + c` to stop the server, `node server.js` to start).
5. A more convenient way to make changes to the project is by using `nodemon`.
   ```bash
   npm install nodemon
   nodemon server.js
   ```
6. Any furthur changes you make to the file will be seen directly without having to restart the server.
7. When you open the web page, you will see:

    ![image](https://github.com/user-attachments/assets/604a8aaa-9885-4558-ba49-73ec88708fd5)
   
9. Click on "Create Room" to create a room. You will find an alert with the room-id generated by `uuid`. Copy the room-id and enter "OK".
    
    ![image](https://github.com/user-attachments/assets/0f435218-9eb5-4362-b4ea-0ff6c688ec44)

11. You will see this after creating the room:
    
    ![image](https://github.com/user-attachments/assets/e0b7747d-9b90-4717-a65c-c97f468f5407)
   
13. Send the room-id to the other person playing the game. This other user should paste the room-id in the given input box and click on "Join Room".
14. The game will start.
15. Players will see something like this (this is a game being played on the same device in different windows):
    
    ![image](https://github.com/user-attachments/assets/f4a827a3-56a8-495c-b1b0-63d3aad17592)


16. Enjoy!



## Game Rules

1. Two players join a game room.
2. Each player controls a paddle on their side of the screen:
   - Player 0: Left side
   - Player 1: Right side

### Gameplay

#### Starting the Game

- The game begins when both players have joined the room.
- The ball starts at the center of the screen (400, 300) with an initial velocity.

#### Game Area

- The game is played on an 800x600 pixel canvas.

#### Paddle Control

- Move your paddle up and down to hit the ball.
- On desktop: Use your mouse to control the paddle. Make sure your mouse is inside the canvas (the box) in order to control the paddle.
- On mobile: Slide your finger up and down on the screen. Make sure you slide your finger inside the canvas (the box) to control the paddle.
- Paddles are 10 pixels wide and 100 pixels tall.

#### Ball Movement

- The ball moves continuously across the screen.
- It bounces off the top and bottom edges of the play area.
- The ball's speed is consistent (not gradually increasing).

#### Scoring

- A player scores a point when the ball passes their opponent's paddle.
- After a point is scored, the ball resets to the center (400, 300).

#### Paddle-Ball Interaction

- Left paddle: Ball bounces when `x <= 20` and `x >= 10`
- Right paddle: Ball bounces when `x >= 780` and `x <= 790`
- The ball changes horizontal direction when it hits a paddle.

### Game States

- 'waiting': Waiting for players to join
- 'playing': Game is in progress

### Technical Details

- Game updates at 120 ticks per second (120 FPS).
- Client-side prediction is used for smooth gameplay.
- Both full state and delta updates are sent to clients.

### Game End

- There is no defined end score in the current implementation.
- The game continues indefinitely, keeping track of scores.

### Disconnection

- If a player disconnects, the game stops and returns to the 'waiting' state.

Remember, positioning your paddle correctly is key to success. Good luck, and enjoy the game!



## Technologies Used

This multiplayer Pong game leverages a variety of modern web technologies to create a real-time, interactive gaming experience. Here's an overview of the key technologies and libraries used:

### Backend

#### Node.js
- **Version**: 14.0.0 or higher
- **Purpose**: Server-side JavaScript runtime
- **Usage**: Powers the game server and handles real-time communication

#### Express.js
- **Purpose**: Web application framework for Node.js
- **Usage**: Handles HTTP requests and serves static files

#### Socket.IO
- **Purpose**: Real-time bidirectional event-based communication
- **Usage**: Manages WebSocket connections for real-time game updates

#### UUID
- **Purpose**: Generates unique identifiers
- **Usage**: Creates unique room IDs for game sessions

 #### Nodemon
- **Purpose**: Monitor for any changes in your source and automatically restart the server
- **Usage**: Removes the repetitive task of restarting the server every time a change is made in the code 

### Frontend

#### HTML5
- **Purpose**: Markup language for structuring the web page
- **Usage**: Provides the basic structure of the game interface

#### CSS3
- **Purpose**: Styling language for web pages
- **Usage**: Defines the layout and appearance of the game interface

#### JavaScript (ES6+)
- **Purpose**: Programming language for client-side logic
- **Usage**: Implements game logic, user input handling, and rendering

#### HTML5 Canvas
- **Purpose**: Drawing API for JavaScript
- **Usage**: Renders the game graphics in real-time

### Development Tools

#### npm (Node Package Manager)
- **Version**: 6.0.0 or higher
- **Purpose**: Package manager for JavaScript
- **Usage**: Manages project dependencies

### Architecture

#### Model-View-Controller (MVC)
- **Purpose**: Architectural pattern
- **Usage**: Organizes code structure for both client and server

### Networking

#### WebSockets (via Socket.IO)
- **Purpose**: Full-duplex communication channels over a single TCP connection
- **Usage**: Enables real-time, bidirectional communication between client and server

#### Delta Updates
- **Purpose**: Optimization technique
- **Usage**: Sends only changed game state data to reduce network load

### Additional Notes

- The game uses a client-side prediction technique to ensure smooth gameplay.
- Both full state and delta updates are implemented for efficient state synchronization.
- The server runs a game loop at 120 ticks per second for precise game mechanics.

This tech stack allows for a responsive, real-time multiplayer experience while maintaining efficiency in data transfer and processing.



## How It Works

The Multiplayer Pong game is built on a client-server architecture using Node.js and Socket.IO for real-time communication. Here's a detailed breakdown of how the game functions:

### Server-Side Architecture

1. **Express Server Setup (`server.js`)**
   - Initializes an Express application.
   - Creates an HTTP server using the Express app.
   - Sets up Socket.IO to work with the HTTP server.
   - Serves static files from the `public` directory.

2. **Room Management**
   - Uses a `Map` to store active game rooms.
   - Each room is identified by a unique UUID.
   - Handles room creation and joining logic.

3. **Game Model (`server/models/GameModel.js`)**
   - Represents the game state, including player positions, ball position, and scores.
   - Implements game logic such as ball movement and collision detection.
   - Provides methods for updating the game state and resetting the ball.

4. **Game Controller (`server/controllers/GameController.js`)**
   - Manages the game loop, running at 120 ticks per second.
   - Handles player connections and disconnections.
   - Updates the game state and sends updates to clients.
   - Implements both full state and delta state updates for efficiency.

### Client-Side Architecture

1. **Main Application (`public/js/main.js`)**
   - Initializes the Socket.IO connection.
   - Handles UI interactions (creating/joining rooms).
   - Sets up the game canvas and initializes game components.

2. **Game Model (`public/js/models/GameModel.js`)**
   - Mirrors the server-side game state.
   - Implements client-side prediction for smooth gameplay between server updates.

3. **Game View (`public/js/views/GameView.js`)**
   - Renders the game state on an HTML5 Canvas.
   - Handles responsive scaling of the game area.

4. **Game Controller (`public/js/controllers/GameController.js`)**
   - Manages user input (mouse/touch events for paddle movement).
   - Communicates with the server via Socket.IO.
   - Updates the client-side game model and triggers view updates.

### Networking and State Synchronization

1. **Connection Establishment**
   - When a client connects, Socket.IO establishes a WebSocket connection.
   - The server assigns the client to a room (either new or existing).

2. **Game State Updates**
   - The server sends two types of updates:
     a. Full State Updates: Complete game state, sent periodically.
     b. Delta Updates: Only changed data, sent more frequently.
   - The client applies these updates to its local game model.

3. **Client-Side Prediction**
   - Between server updates, the client predicts game state changes.
   - This prediction is corrected when new server data arrives, ensuring smooth gameplay.

4. **Input Handling**
   - Player inputs (paddle movements) are immediately applied client-side.
   - Inputs are also sent to the server, which validates and applies them.

### Game Loop

1. **Server-Side**
   - Runs at 120 FPS.
   - Updates ball position and checks for collisions.
   - Processes any pending player inputs.
   - Sends state updates to clients.

2. **Client-Side**
   - Runs on each animation frame (typically 60 FPS).
   - Applies any pending server updates.
   - Predicts game state based on last known state and time elapsed.
   - Renders the current game state.

### Collision Detection and Scoring

1. **Ball-Wall Collisions**
   - Detected when the ball reaches the top or bottom of the play area.
   - The ball's vertical direction is reversed.

2. **Ball-Paddle Collisions**
   - Checked when the ball is within the x-coordinate range of a paddle.
   - If the ball's y-coordinate aligns with the paddle, its horizontal direction is reversed.

3. **Scoring**
   - Occurs when the ball passes beyond a paddle's x-coordinate.
   - The opposing player's score is incremented.
   - The ball is reset to the center of the play area.

### Error Handling and Disconnections

- The server monitors for disconnections and removes players from the game as necessary.
- If a player disconnects, the game is either terminated or waits for a new player, depending on the implementation.

This architecture allows for a responsive, real-time multiplayer experience while optimizing network usage through efficient state synchronization techniques.



## File Structure
   ```
   pong-final/
   │
   ├── server/
   │   ├── server.js
   │   ├── package.json
   │   ├── package-lock.json
   │   ├── node_modules/
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



## Contributing

Contributions to improve the game are welcome. Please follow these steps:

1. Fork the repository
2. Clone your forked repository.
   ```bash
   git clone https://github.com/anomitroid/pong-final.git
3. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and commit them with a descriptive commit message:
   ```bash
   git add .
   git commit -m "Add a concise description of your changes"
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a pull request on the original repository.

Before submitting a pull request, please ensure:
- Your code follows the project's coding style.
- You've added comments to explain complex logic.
- You've updated the README if you've added new features or changed functionality.
- All existing tests pass, and you've added new tests for your features if applicable.
