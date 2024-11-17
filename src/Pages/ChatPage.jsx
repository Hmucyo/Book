import React, { useState } from "react";
import Sidebar from "../Components/chat/Sidebar";
import ChatWindow from "../Components/chat/ChatWindow";
import TopBar from "../Components/TopBar";
import "./ChatPage.css";

function ChatPage() {
  const [mockChatData, setMockChatData] = useState({
    Bob: [],
    Eva: [
      { sender: "You", message: "I’m interested in swapping for Information is Beautiful!", timestamp: "2024-10-25 10:00:00" },
      { sender: "Bob", message: "Sure, let’s swap!", timestamp: "2024-10-25 10:05:00" },
    ],
    Walle: [
      { sender: "Walle", message: "Thanks for the book!", timestamp: "2024-10-24 15:00:00" },
      { sender: "You", message: "You’re welcome!", timestamp: "2024-10-24 15:05:00" },
    ],
  });

  const [currentUser, setCurrentUser] = useState("Bob");

  // Dynamically generate contact list
  const contacts = Object.keys(mockChatData).map((name) => {
    const lastMessage =
      mockChatData[name].length > 0
        ? mockChatData[name][mockChatData[name].length - 1].message
        : "No messages yet";
    return { name, message: lastMessage };
  });

  // Function to handle sending a swap request
  const handleSendRequest = () => {
    const newMessage = {
      sender: "You",
      message: "I’ve sent a swap request!",
      timestamp: new Date().toISOString(),
    };

    setMockChatData((prevData) => ({
      ...prevData,
      [currentUser]: [...(prevData[currentUser] || []), newMessage],
    }));
  };

  return (
    <div className="chat-page">
      <TopBar />
      <div className="chat-content">
        <Sidebar contacts={contacts} onSelectUser={setCurrentUser} />
        <ChatWindow
          user={currentUser}
          chats={mockChatData[currentUser]}
          onSendRequest={handleSendRequest}
        />
      </div>
    </div>
  );
}

export default ChatPage;
