import { writable, type Writable } from "svelte/store";

type OpCode = 0 | 1 | 2 | 3;
type EventType = "INIT_STATE" | "PRESENCE_UPDATE";
interface Data {
  op: OpCode;
  seq: 1 | 2;
  t: EventType;
  d: Presence;
}

export const presenceData: Writable<Presence> = writable();

export function connectWebsocket(userId: string) {
  const socket = new WebSocket("wss://api.lanyard.rest/socket");
  socket.onopen = () => {
    socket.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }));
    setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ op: 3 }));
      }
    }, 1000);
  };

  socket.onmessage = (event) => {
    const data: Data = JSON.parse(event.data);
    if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") presenceData.set(data.d);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  socket.onclose = (event) => {
    console.log(`WebSocket connection closed: ${event.code} ${event.reason}`);
  };
}
