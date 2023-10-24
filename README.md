# socket.io-messaging-server
a simple socket server made for deep sea tactics!


# Documentation

## Connecting
Use socket.io to connect to the hosted version of the server, for example: 

```ts
import { io } from "socket.io-client";

const socket = io("https://sockets.hosted.coasterfan5.com", { transports: ["websocket"] })

```

## Set Name
You can emit a setName event to set the name of your client
```ts
import { io } from "socket.io-client";

const socket = io("https://sockets.hosted.coasterfan5.com", { transports: ["websocket"] })

socket.on("connect", () => {
    socket.emit("setName", "Joe");
})

```

## Send Messages
You can also send messages, which will use the name you have set before, and if you did not set a name, it will use 
```ts
import { io } from "socket.io-client";

const socket = io("https://sockets.hosted.coasterfan5.com", { transports: ["websocket"] })

socket.on("connect", () => {
    socket.emit("setName", "Joe");
    socket.emit("message", "Hello World")
})
```

## Incoming Messages
Finally, all clients will be sent incoming messages which include message details, and server details
```ts
import { io } from "socket.io-client";

const socket = io("https://sockets.hosted.coasterfan5.com", { transports: ["websocket"] })

socket.on("connect", () => {
    socket.emit("setName", "Joe");
    socket.emit("message", "Hello World")
});

socket.on("message", (message) -> {
    console.log(`Author: ${message.author}`)
    console.log(`Message: ${message.message}`)
});
```

Message Items
```JSON
{
    "author": "author string",
    "message": "Message Content", 
    "server": {
        "online": 0 //online user count
        "userList": [] //array of user name strings
    }
}
```


