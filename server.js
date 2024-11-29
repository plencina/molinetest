import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

// when using middleware `hostname` and `port` must be provided below

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {

    console.log("nueva conexion, id: ", socket.id)
  
    socket.on("disconnect", () => {
      console.log("usuario desconectado: ", socket.id)
    })

    socket.on("handlePuerta", (data) => {
      console.log("recibiendo evento del cliente: ", { evento: data.evento, id: data.id} )
      io.emit("handlePuerta", data)
    })
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});