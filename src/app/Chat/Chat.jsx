import React, { useState } from 'react';
import { Link, Mic, Image as ImageIcon, Send, CheckCheck ,MoreVertical} from 'lucide-react';
import './Chat.css';

const users = [
  { id: 1, name: 'مريم العلي', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 2, name: 'خالد الزين', image: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { id: 3, name: 'سارة أحمد', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { id: 4, name: 'عادل جابر', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 5, name: 'ياسمين', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { id: 6, name: 'كريم', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 7, name: 'ليلى', image: 'https://randomuser.me/api/portraits/women/34.jpg' },
  { id: 8, name: 'سامي', image: 'https://randomuser.me/api/portraits/men/18.jpg' },
  { id: 9, name: 'رنا', image: 'https://randomuser.me/api/portraits/women/55.jpg' },
  { id: 10, name: 'أحمد', image: 'https://randomuser.me/api/portraits/men/41.jpg' },
];

const initialConversations = users.reduce((acc, user, index) => {
  acc[user.id] = [
    { id: 1, sender: 'patient', text: `مرحبا دكتور، عندي سؤال بخصوص طفلي رقم ${index + 1}` },
    { id: 2, sender: 'doctor', text: 'تفضل، أنا جاهز أجاوبك 😊' }
  ];
  return acc;
}, {});

const Chat = () => {
  const [activeUserId, setActiveUserId] = useState(users[0].id);
  const [conversations, setConversations] = useState(initialConversations);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const activeUser = users.find(u => u.id === activeUserId);
  const messages = conversations[activeUserId] || [];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'doctor',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setConversations({
        ...conversations,
        [activeUserId]: [...messages, newMsg]
      });
      setNewMessage("");
    }
  };

  const filteredUsers = users.filter(user => user.name.includes(searchTerm));

  return (
      <div className="chat-container">
        <div className="chatsidebar">
          <h3 className="sidebar-title">قائمة المرضى</h3>
          <input
              type="text"
              className="search-input"
              placeholder="بحث باسم المريض..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredUsers.map(user => (
              <div
                  key={user.id}
                  className={`user-card ${activeUserId === user.id ? 'active' : ''}`}
                  onClick={() => setActiveUserId(user.id)}
              >
                <img src={user.image} alt={user.name} />
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>اضغط لعرض المحادثة</p>
                </div>
              </div>
          ))}
        </div>

        <div className="chat-main">

          <div className="chat-header">
            <img src={activeUser.image} alt="مريض" />




            <div>
              <h2>{activeUser.name}</h2>
              <p>متصل الآن</p>

            </div>
            <div className="Option">
              <MoreVertical size={18} />
            </div>
          </div>

          <div className="chat-body">
            {messages.map(msg => (
                <div
                    key={msg.id}
                    className={`chat-bubble ${msg.sender === 'doctor' ? 'from-doctor' : 'from-patient'}`}
                >
                  {msg.text}
                  <div className="status-icon">
                    <CheckCheck size={14} />
                  </div>
                  <time>{msg.timestamp || '10:30'}</time>
                </div>
            ))}
          </div>

          <div className="chat-input">
            <div className="input-with-icons">
              <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
              />
              <div className="chat-icons-inside">
                <Link size={18} />
                <Mic size={18} />
                <ImageIcon size={18} />
              </div>
            </div>
            <button onClick={handleSendMessage}><Send size={30} /></button>
          </div>
        </div>
      </div>
  );
};

export default Chat;