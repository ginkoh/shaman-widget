export default class WebsocketHandler {
    constructor(room_name) {
      this.room_name = room_name || "one_room";
      this.createWebsocket();
    }
  
    /**
     * Creates the websocket connection with the given "room_name".
     */
    createWebsocket = () => {
      this.chatSocket = new WebSocket(
        "ws://" + 'localhost:8000' + "/ws/chat/" + this.room_name + "/"
      );
  
      // this.chatSocket.onmessage = this.onMessage;
      this.chatSocket.onclose = this.onClose;
    };
  
    /**
     * Used when the user receives a message from an operator.
     */
    onMessage = e => {
      const data = JSON.parse(e.data);
      const message = data.message;

      return message;
    };
  
    onClose = e => {
      console.log("Chat socket closed", e);
    };
  
    /**
     * User sends a message to an (random) operator.
     */
    sendData = message => {
      this.chatSocket.send(JSON.stringify({ message }));
    };
  }