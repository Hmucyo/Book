import React from "react";
import "./Sidebar.css"; // Style for Sidebar
import contactPlaceholder from "../../assets/contactPlaceholder.png";

function Sidebar({ contacts, onSelectUser }) {
  return (
    <div className="sidebar">
      <input className="sidebar-search" type="text" placeholder="Search" />
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="contact-item"
            onClick={() => onSelectUser(contact.name)} // Update selected user
          >
            <div className="contact-icon">
              <img
                src={contactPlaceholder} // Placeholder icon
                alt={contact.name}
              />
            </div>
            <div className="contact-details">
              <span className="contact-name">{contact.name}</span>
              <span className="contact-message">{contact.message}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
