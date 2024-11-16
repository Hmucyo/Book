import { Link } from 'react-router-dom';
import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

function Chat() {
    return (
        <div class="chat">
            <div class="div">
                <div class="top-bar">
                <div class="location-frame">
                    <img class="location-icon" src="https://c.animaapp.com/nm4Y9Hwe/img/location-on.svg" alt="Location icon" />
                    <input class="zip-code-box" type="number" pattern="[0-9]{5}" inputMode="numeric" maxLength="5" defaultValue="19104" />
                </div>
                <div class="search-frame">
                    <img class="search-icon" src="https://c.animaapp.com/nm4Y9Hwe/img/search.svg"alt="Search Icon " />
                    <input class="search-box" type="text" placeholder="Search" />
                </div>
                <img class="bookmark" src="https://c.animaapp.com/nm4Y9Hwe/img/bookmark.svg" alt="Bookmark Icon" />
                <img class="icon-comment" src="https://c.animaapp.com/nm4Y9Hwe/img/---icon--comment-@2x.png"alt="Chat Icon" />
                <img class="group" src="https://c.animaapp.com/nm4Y9Hwe/img/group-27@2x.png" alt="Group icon"/>
                <img class="account-circle" src="https://c.animaapp.com/nm4Y9Hwe/img/account-circle.svg"alt="Account Circle Icon" />
                <Link to="/">
                    <img class="logo" src="https://c.animaapp.com/zLXIMVIQ/img/image-9@2x.png" alt="logo"/>
                 </Link>
            </div>
            
        </div>
        
     </div>
    )
};

export default Chat;