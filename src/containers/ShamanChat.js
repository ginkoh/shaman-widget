import React, { useEffect, useState } from "react";
import WebSocketHandler from "../sockets/websocket-handler";
import { connect } from "react-redux";

const ws = new WebSocketHandler();

function useMessageData(setMessages) {
  return useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8000/chat/messages/");
      const resultJSON = await result.json();
      setMessages(resultJSON);
    };

    fetchData();
  }, []);
}

function useNewMessages(messages, setMessages) {
  useEffect(() => {
    ws.chatSocket.onmessage = e => {
      const data = JSON.parse(e.data);
      const message = data;

      setMessages([...messages, message]);
    };
  });
}

function fetchLastMessages() {
  // Get only the last messages of this conversation.
  // Database: conversation.messages
  // if query param: limit, then:
  // localhost:8000/api/conversations/conversation_uuid/?limit=10
  // https://stackoverflow.com/questions/6574003/django-limiting-query-results

  const last_messages = [
    {
      sentBy: "operator",
      username: "cubano bkn",
      message_channel: 'email',
      message_text_content: "Bla bla bla",
      message_html_content: `
        <p style="font-weight: bold">Bla bla bla</p>
      `,
      uuid: "6d88b330-ef19-41bc-aff6-d851bc52c8be"
    },
    {
      sentBy: "user",
      username: "juliano",
      message_channel: 'chat',
      message_text_content: "Ble ble ble",
      message_html_content: `
        <p style="font-weight: bold">Ble ble ble</p>
      `,
      uuid: "bea20626-e54e-454d-b132-bb69e1b79375"
    }
  ]

  return last_messages;
};


function ShamanChat({
  uuid
}) {
  // const [roomName, setRoomName] = useState("");

  // 10 messages fetched
  // User scrolls to top
  // Fetch more 10 messages
  // New messages arr: [...first10Messages, ...new10Messages]
  // And so on...

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useMessageData(setMessages);
  useNewMessages(messages, setMessages);

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
    // TODO: SEND SENT MESSAGES TO DATABASE.
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

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShamanChat);
