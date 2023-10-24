# socket.io-messaging-server
a simple socket server made for deep sea tactics!


# Documentation

## Connecting
Use socket.io to connect to the hosted version of the server, for example: 

```ts
import { io } from "socket.io-client";

const socket = io.connect("https://sockets.hosted.coasterfan5.com")

```

## Set Name
You can emit a setName event to set the name of your client
```ts
import { io } from "socket.io-client";

const socket = io.connect("https://sockets.hosted.coasterfan5.com")
socket.emit("setName", "Joe");
```

## You can also send messages, which will use the name you have set
```ts
import { io } from "socket.io-client";

const socket = io.connect("https://sockets.hosted.coasterfan5.com")
socket.emit("setName", "Joe");
socket.emit("message", "Hello World")
```

## Finally, all clients will be sent incoming messages
```ts
import { io } from "socket.io-client";

const socket = io.connect("https://sockets.hosted.coasterfan5.com")
socket.emit("setName", "Joe");
socket.emit("message", "Hello World")
socket.on("message", (message) -> {
    console.log(`Author: ${message.author}`)
    console.log(`Message: ${message.message}`)
});
```


