import React from 'react';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <section className={styles.filterBar}>
      <div className={styles.filterOption}>
        <span>Radius: 3 Miles</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/a403f1fc731a485c2ab8b8f0103379d83dd7c6164917292bfeac8ba484698888?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.dropdownIcon} />
      </div>
      <div className={styles.filterOption}>
        <span>Category</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/ac44934a76178d76dd75486d31b81a52c92f6365c6da3f782679a41c653c5f12?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.dropdownIcon} />
      </div>
      <button className={styles.addFilterButton}>
        <span>Add Filter</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/384ffaaa1943e3705bd2ceb79dbe71d5933011c1a15848a1aed9038421c2a7d7?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&" alt="" className={styles.addIcon} />
      </button>
    </section>
  );
};

export default FilterBar;