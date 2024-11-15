import React from 'react';
import BookCard from './BookCard';
import styles from './BookList.module.css';

const BookList = ({ books, title }) => {
    return (
      <section className={styles.bookListSection}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.bookListDivider} />
        <div className={styles.bookListContainer}>
          {books && books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </section>
    );
  };

export default BookList;