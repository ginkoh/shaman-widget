import React, { useEffect, useState } from "react";
import WebSocketHandler from "../sockets/websocket-handler";

const ws = new WebSocketHandler();

/** TOMAR CHAROPE PRA TOSSE */
function ShamanChat() {
  // const [roomName, setRoomName] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8000/chat/messages/");
      const resultJSON = await result.json();
      setMessages(resultJSON);
    };

    fetchData();
  }, []);

  useEffect(() => {
    ws.chatSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const message = data;

      setMessages([...messages, message]);
    };
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch("http://localhost:8000/chat/one_room/");
  //     const resultJSON = await result.json();

  //     setRoomName(resultJSON.room_name);
  //   };

  //   fetchData();
  // }, []);

  function handleSendData(e, messageToSend) {
    ws.sendData(messageToSend);
    setMessage("");
    setMessages([...messages, messageToSend]);
  }

  return (
    <React.Fragment>
      <ul>
        {messages.map((v, i) => (
          <li key={i}>{v.message}</li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <input
        type="button"
        value="Send"
        onClick={e => handleSendData(e, message)}
      />
    </React.Fragment>
  );
}

export default ShamanChat;
