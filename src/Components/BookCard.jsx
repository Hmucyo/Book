import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ imageUrl, title, author }) => {
  return (
    <article className={styles.bookCard}>
      <img src={imageUrl} alt={`Cover of ${title}`} className={styles.bookCover} />
      <h3 className={styles.bookTitle}>{title}</h3>
      <p className={styles.bookAuthor}>{author}</p>
    </article>
  );
};

export default BookCard;