import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/2e26a98839a511c550e5c57a5d83a630c6ce13807b430a1357075e432a98525f?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="Logo" className={styles.logo} />
      <div className={styles.locationSelector}>
        <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/fa64360fd3b115cad47bac42a54bba082770a9398e1f71d082f726b582335113?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.locationIcon} />
        <span className={styles.locationCode}>19104</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/ac44934a76178d76dd75486d31b81a52c92f6365c6da3f782679a41c653c5f12?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.dropdownIcon} />
      </div>
      <nav className={styles.navigation}>
        <div className={styles.searchContainer}>
          <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/3bbfce09789450aa811f130673d8e6fce68fd6c0addfec8e6476d00980751d8e?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.searchIcon} />
          <input type="search" placeholder="Search" className={styles.searchInput} aria-label="Search books" />
        </div>
        <button className={styles.navButton} aria-label="Notifications">
          <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/e1fe1be595f216dcecccce542e11c45aa4cc089c2e08c01eaf10b0eb68563b59?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.notificationIcon} />
        </button>
        <button className={styles.navButton} aria-label="Messages">
          <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/f3a82cab0b31eb889c5184fb37178e2a4772e6d63a4d8bb8e8bfeaee24f0042f?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.messageIcon} />
        </button>
      </nav>
      <div className={styles.userActions}>
        <button className={styles.userButton} aria-label="User profile">
          <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/7d6e6e6f4230838cefd8d1cc52db68c5629e39b625a67bbd096099174c83b62f?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.userIcon} />
        </button>
        <button className={styles.cartButton} aria-label="Shopping cart">
          <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/681e787d76b8e1f12b7f14941ffb34e258bfad3b3101c3fa0a5149b761ffc072?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.cartIcon} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;