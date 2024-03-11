import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 30000,
    transports: ["websocket"],
  };
  return io("https://code-colab-ws.onrender.com", options); // return io(process.env.REACT_APP_BACKEND_URL, options);
};
