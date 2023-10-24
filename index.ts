import { Server, Socket } from "socket.io";
import "dotenv/config";


type SocketMap = {
    [id: string]: {
        name?: string;
    }
}

const io = new Server();

io.listen(parseInt(process.env.PORT ?? "25565"));
let connectedusers: number = 0;
let socketMap: SocketMap = {}


io.on("connection", (socket) => {
    connectedusers++;
    socketMap[socket.id] = {};
    socket.emit("connected", {
        connectedusers
    })

    socket.on("setName", (args) => {
        socketMap[socket.id] = args;
    })

    socket.on("message", (args) => {
        io.emit("message", {
            message: args
        })
    })

    socket.on("disconnect", () => {
        connectedusers--;
    })
})