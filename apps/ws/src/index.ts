import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const wss = new WebSocketServer({ port: 8000 });
const gameManager = new GameManager();

wss.on("connection", function connection(ws) {
  gameManager.addNewUser(ws);

  // Handle connection close (disconnection)
  ws.on("close", () => {
    gameManager.removeUser(ws);
  });
});
