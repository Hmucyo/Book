import React, { useEffect, useRef } from "react";
import "./ChatWindow.css"; // Style for ChatWindow

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatTime(dateString) {
  const options = { hour: "2-digit", minute: "2-digit" };
  return new Date(dateString).toLocaleTimeString(undefined, options);
}

function ChatWindow({ user, chats, onSendRequest }) {
  const chatEndRef = useRef(null);

  // Sort messages by timestamp
  const sortedChats = chats ? chats.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)) : [];

  // Automatically scroll to the bottom when chats update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="chat-window">
      {sortedChats.length > 0 ? (
        <>
          {/* Chat Messages */}
          <div className="chat-messages">
            {sortedChats.map((chat, index) => {
              const isNewDate =
                index === 0 || formatDate(chat.timestamp) !== formatDate(sortedChats[index - 1].timestamp);

              return (
                <div key={index}>
                  {/* Display Date Separator */}
                  {isNewDate && <div className="chat-date">{formatDate(chat.timestamp)}</div>}

                  {/* Chat Bubble */}
                  <div
                    className={`chat-bubble-wrapper ${chat.sender === "You" ? "outgoing" : "incoming"}`}
                  >
                    <div
                      className={`chat-bubble ${chat.sender === "You" ? "outgoing" : "incoming"}`}
                    >
                      <p>{chat.message}</p>
                      <span className="chat-timestamp">{formatTime(chat.timestamp)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={chatEndRef} /> {/* Marker to scroll to the bottom */}
          </div>

          {/* Chat Input */}
          <div className="chat-input">
            <button className="attachment-button">📎</button>
            <input
              className="message-input"
              type="text"
              placeholder="Type Message"
            />
            <button className="send-button">↑</button>
          </div>
        </>
      ) : (
        <div className="no-messages">
          <p>Send swap request to {user}?</p>
          <div className="buttons">
            <button className="yes-button" onClick={onSendRequest}>
              Yes
            </button>
            <button className="no-button">No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
