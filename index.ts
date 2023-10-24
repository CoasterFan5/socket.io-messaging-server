import { Server, Socket } from "socket.io";
import "dotenv/config";


type SocketMap = {
    [id: string]: {
        name?: string;
    }
}

const io = new Server();


let connectedusers: number = 0;
let socketMap: SocketMap = {}



let getUserList = () => {
    let userList: String[] = [];
    for(const item in socketMap ) {
        userList.push(socketMap[item].name ?? "Anonymous User")
    }
    
}


io.on("connection", (socket) => {
    connectedusers++;
    socketMap[socket.id] = {};
    socket.emit("connected", {
        connectedusers
    })

    socket.on("setName", (args) => {
        socketMap[socket.id].name = args;
    })

    socket.on("message", (args) => {
        io.emit("message", {
            message: args,
            author: socketMap[socket.id].name,
            server: {
                online: connectedusers,
                userList: getUserList()
            }
        })
    })

    socket.on("disconnect", () => {
        connectedusers--;
    })
})

let port: number = parseInt(process.env.PORT ?? "25565")
io.listen(port);
console.log(`listening on port ${port}`)
