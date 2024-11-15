import React from 'react';
import TopBar from './TopBar';
import FilterBar from './FilterBar';
import BookList from './BookList';
import styles from './BookStore.module.css';

const textbooks = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/40f583ee699231d4ec0b39f8d3ffb41bfc31affe6fdd7e39463ff6b4a543720c?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "The Nature of Code: Simulating Natural Systems with Javascript",
    author: "Daniel Shiffman"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/832ddb1cae345cf84676a364525736635b18d1918149b62e6aa6d84ccc5d060a?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "Information is Beautiful",
    author: "David McCandless"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/40ba2504961daf658bb0a7a83cb84a484c30a405a3162dcab403843dfc704eed?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "STILL: The Art of Noticing",
    author: "Mary Jo Hoffman"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/9310f034a61b05c63db40776a5247649d174327a812123eb02ca61ae6b74603b?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "Accidentally Wes Anderson",
    author: "Wally Koval"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/54565e83246a337608ad6d4594bbdca0cc8ceb9a9c28e598726f6b62642abe52?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "World of Art: The Photograph as Contemporary Art",
    author: "Charlotte Cotton"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/a405bb9bacb0bae24b09d99d91c6a9f2b4069348e21cb6bb48e4b09d33f42c0a?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "Cracking the Coding Interview: 189 Programming",
    author: "Gayle Laakmann McDowell"
  }
];

const recentAdditions = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/cdf569e01cfd523f8eeca5ac226f2bdbd917133644a4adb8b5976fa22b74f35c?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "Cracking the Coding Interview: 189 Programming",
    author: "Gayle Laakmann McDowell"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/5203518a4611d4b6b53c87bdeb8a3ecb5f2a7f7e1177d7e74df6f35e0ac6b3f8?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "Accidentally Wes Anderson",
    author: "Wally Koval"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/bade55283ac932efa118614501c475f9a4d6e7ca0019103381b36c266b92db75?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "The Nature of Code: Simulating Natural Systems with Javascript",
    author: "Daniel Shiffman"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/f8e15555d83935ce7766eeb505b1fca5087463f0b5f11633ab1e52fa64a94fba?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "World of Art: The Photograph as Contemporary Art",
    author: "Charlotte Cotton"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/b05925e0e059d68bdb0920449ecf2c8e830ca885a4558efb9b50083948486503?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "STILL: The Art of Noticing",
    author: "Mary Jo Hoffman"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/c8b8266ffa59433ca5fe1b1a25bb710c/d5f29842a85062ede2f4adf0ba0c2d30d8072df35efc477cca748ce1e63fcb21?apiKey=c8b8266ffa59433ca5fe1b1a25bb710c&",
    title: "Information is Beautiful",
    author: "David McCandless"
  }
];

const BookStore = () => {
  return (
    <main className={styles.bookStore}>
      <TopBar />
      <FilterBar />
      <BookList books={textbooks} title="Textbooks" />
      <BookList books={recentAdditions} title="Recent Additions" />
    </main>
  );
};

export default BookStore;