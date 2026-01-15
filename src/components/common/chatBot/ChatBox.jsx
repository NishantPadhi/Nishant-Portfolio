import React, {useState, useEffect, useRef} from 'react';
import {useTheme} from '../../../context/ThemeContext';
import {loadMemory, saveMemory, startSession} from './utils/memory';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      value: `👋 Hi! I'm Virtual Nishant. I'm here to help you explore Nishant's
          portfolio and experience! 🚀 Here's what I can do for you: - 📄 Send
          Resume: Just ask, and I'll email it to you instantly. 🤝 Connect: I
          can notify Nishant if you'd like to collaborate or hire him. 💻
          Projects & Skills: Ask me about his tech stack or specific project
          details. How can I help you today?`,
      sender: 'Nishant',
    },
    {
      value: 'Hello!!!',
      sender: 'User',
    },
  ]);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const {theme} = useTheme();

  const isDarkTheme = theme === 'dark';

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = (text) => {
    if (!text.trim()) return;
    const newMessage = {from: 'user', text};
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    saveMemory(updatedMessages);
    inputRef.current.value = '';
    // Here you can add logic to get a response from the bot and update messages
  };

  useEffect(() => {
    const mem = loadMemory();
    startSession(mem);
    saveMemory(mem);
  }, []);

  return (
    <>
      <div
        className={`${
          isDarkTheme ? 'bg-dark' : 'bg-light'
        } min-h-80 overflow-y-auto`}
      >
        {messages.map((m, i) => (
          <div
            key={`${m.value}-${i}`}
            className={`flex ${m.sender === 'Nishant' ? 'justify-start' : 'justify-end'} m-4`}
          >
            <div className={`flex ${m.sender === 'Nishant' ? (isDarkTheme ? 'nishant' : 'nishant-light') : (isDarkTheme ? 'user' : 'user-light')} p-4`}>{m.value}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div
        className={`${
          isDarkTheme ? 'inputDiv-dark' : 'inputDiv-light'
        } py-4 px-8 flex gap-2 rounded-b-lg`}
      >
        <input
          ref={inputRef}
          className={`inputBox flex-1 px-4 py-2 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-accent ${
            isDarkTheme ? 'input-dark' : 'input-light'
          }`}
          placeholder="Ask me anything..."
          onKeyDown={(e) => e.key === 'Enter' && send(e.target.value)}
        />
      </div>
    </>
  );
};

export default ChatBox;
