import React, { useState } from 'react';
import { Phone, Mic, Image as ImageIcon, Send } from 'lucide-react';
import './Chat.css';

const users = [
  {
    id: 1,
    name: 'مريم العلي',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'خالد الزين',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    id: 3,
    name: 'سارة أحمد',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 4,
    name: 'عادل جابر',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

const initialConversations = {
  1: [
    { id: 1, sender: 'patient', text: 'دكتور، بنتي ما عم تاكل منيح، شو ممكن أعمل؟' },
    { id: 2, sender: 'doctor', text: 'جربي تعطيها وجبات خفيفة كل ساعتين، وشوفي شو بتحب أكتر 💡' }
  ],
  2: [
    { id: 1, sender: 'patient', text: 'سلام دكتور، فحص الطفلة كان تمام؟' },
    { id: 2, sender: 'doctor', text: 'الحمد لله، النمو طبيعي، بس بدنا نتابع الحديد وفيتامين D' }
  ],
  3: [
    { id: 1, sender: 'patient', text: 'ابني عنده حرارة، استنى رأيك قبل ما أروح الطوارئ' },
    { id: 2, sender: 'doctor', text: 'إذا الحرارة فوق ٣٩ وما بتنزل، الأفضل تروحي فورًا' }
  ],
  4: [
    { id: 1, sender: 'patient', text: 'شو رأيك بأكل الطفل عمره سنة؟' },
    { id: 2, sender: 'doctor', text: 'لازم يكون متنوع، وفيه بروتين، وخضار، وفواكه بشكل يومي 🍎🥦' }
  ],
};

const Chat = () => {
  const [activeUserId, setActiveUserId] = useState(users[0].id);
  const [conversations, setConversations] = useState(initialConversations);
  const [newMessage, setNewMessage] = useState("");

  const activeUser = users.find(u => u.id === activeUserId);
  const messages = conversations[activeUserId] || [];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = { id: messages.length + 1, sender: 'doctor', text: newMessage };
      setConversations({
        ...conversations,
        [activeUserId]: [...messages, newMsg]
      });
      setNewMessage("");
    }
  };

  return (
      <div className="chat-container">
        <div className="sidebar">
          <h3 className="sidebar-title">المحادثات</h3>
          {users.map(user => (
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
            <div className="chat-icons">
              <Phone size={20} />
              <Mic size={20} />
              <ImageIcon size={20} />
            </div>
          </div>

          <div className="chat-body">
            {messages.map(msg => (
                <div
                    key={msg.id}
                    className={`chat-bubble ${msg.sender === 'doctor' ? 'from-doctor' : 'from-patient'}`}
                >
                  {msg.text}
                </div>
            ))}
          </div>

          <div className="chat-input">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="اكتب رسالتك هنا..."
            />
            <button onClick={handleSendMessage}><Send size={18} /></button>
          </div>
        </div>
      </div>
  );
};

export default Chat;
