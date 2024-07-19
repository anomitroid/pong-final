# Multiplayer Pong Game

A real-time multiplayer Pong game built with Node.js, Express, Socket.IO, and HTML5 Canvas. The task is simple. Guard your wall! Use your mouse (desktop) or touch (phone) to control the paddle and bounce the ball back before it hits the wall. 

![image](https://github.com/user-attachments/assets/5177da34-d52c-4cf3-b725-ede378cf8e51)


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
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
7. Inside `server` you should find a `node-modules` directory.
   
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
19. After this command, your final file structure should be exactly similar to `pong-final` with just 1 directory extra inside `server-side` in `your-project`. This is the `node-modules` 
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
14. The game will start
15. Players will see something like this (this is a game being played on the same device in different windows):
    
    ![image](https://github.com/user-attachments/assets/70f042c5-e34b-4ec3-85fd-86d50924324f)

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
- On desktop: Use your mouse to control the paddle.
- On mobile: Slide your finger up and down on the screen.
- Paddles are 10 pixels wide and 100 pixels tall.

#### Ball Movement

- The ball moves continuously across the screen.
- It bounces off the top and bottom edges of the play area.
- The ball's speed is consistent (not gradually increasing).

#### Scoring

- A player scores a point when the ball passes their opponent's paddle.
- After a point is scored, the ball resets to the center (400, 300).

#### Paddle-Ball Interaction

- Left paddle: Ball bounces when x <= 20 and x >= 10
- Right paddle: Ball bounces when x >= 780 and x <= 790
- The ball changes horizontal direction when it hits a paddle.

### Game States

- 'waiting': Waiting for players to join
- 'playing': Game is in progress

### Technical Details

- Game updates at 120 ticks per second.
- Client-side prediction is used for smooth gameplay.
- Both full state and delta updates are sent to clients.

### Game End

- There is no defined end score in the current implementation.
- The game continues indefinitely, keeping track of scores.

### Disconnection

- If a player disconnects, the game stops and returns to the 'waiting' state.

Remember, positioning your paddle correctly is key to success. Good luck, and enjoy the game!


