import React, { useState } from "react";
import "./Chat.css";

const ChatUI = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "patient",
      text: "Hello doctor",
      time: "6:00 PM",
    },
    {
      sender: "doctor",
      text: "Hi Amina, how can I help you?",
      time: "6:01 PM",
    },
  ]);

  const contacts = [
    {
      name: "Amina Yusuf",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Daniel Obi",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Fatima Bello",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  const [activeChat, setActiveChat] = useState(contacts[0]);
  const [search, setSearch] = useState("");

  const handleSend = () => {
    if (messageInput.trim() === "") return;

    const newMessage = {
      sender: "doctor",
      text: messageInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-ui-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Chats</h2>
        <input
          type="text"
          placeholder="Search or start new chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="contacts-list">
          {filteredContacts.map((c, index) => (
            <div
              key={index}
              className={`contact ${activeChat.name === c.name ? "active" : ""}`}
              onClick={() => setActiveChat(c)}
            >
              <img src={c.avatar} alt={c.name} />
              <div className="contact-info">
                <strong>{c.name}</strong>
                <small>Last message preview</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Panel */}
      <div className="chat-panel">
        <div className="chat-header">
          <img src={activeChat.avatar} alt={activeChat.name} />
          <div>
            <h5>{activeChat.name}</h5>
            <span className="online">online</span>
          </div>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${
                msg.sender === "doctor" ? "sent" : "received"
              }`}
            >
              <div className="bubble">{msg.text}</div>
              <small className="time">{msg.time}</small>
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
