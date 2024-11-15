import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookStore from '../Components/BookStore';
import { useState } from 'react';
import {Link} from 'react-router-dom';
// import InformationisBeautiful from '../images/InformationisBeautiful.png';

const input = document.querySelector('.text-wrapper');

// input.addEventListener('input', () => {
//   const value = input.value;
//   if (!/^\d{5}$/.test(value)) {
//     // Input is not a 5-digit integer, display an error message
//     console.error('Invalid input');
//   }
// });
function HomePage() {
    const [count, setCount] = useState(0); // Fix: Move useState hook out of callback
    const handleButtonClick = () => {
      
    };
    //variables in here
  return (
    <Container>
      <div class="landing-page">
      <div class="div">
        <div class="top-bar">
          <div class="location-frame">
            <img class="location-icon" src="https://c.animaapp.com/nm4Y9Hwe/img/location-on.svg" />
            <input class="zip-code-box" type="number" pattern="[0-9]{5}" inputMode="numeric" maxLength="5" defaultValue="19104" />
          </div>
          <div class="search-frame">
            <img class="search-icon" src="https://c.animaapp.com/nm4Y9Hwe/img/search.svg" />
            <input class="search-box" type="text" placeholder="Search" />
          </div>
          <img class="bookmark" src="https://c.animaapp.com/nm4Y9Hwe/img/bookmark.svg" />
          <img class="icon-comment" src="https://c.animaapp.com/nm4Y9Hwe/img/---icon--comment-@2x.png" />
          <img class="group" src="https://c.animaapp.com/nm4Y9Hwe/img/group-27@2x.png" />
          <img class="account-circle" src="https://c.animaapp.com/nm4Y9Hwe/img/account-circle.svg" />
          <img class="image" src="https://c.animaapp.com/nm4Y9Hwe/img/image-9@2x.png" />
        </div>
        <div class="radius-frame">
          <div class="radius-box-frame">
            <div class="radius-text">Radius:</div>
            <input class="radius-input" type="number" pattern="[0-9]+" inputMode="numeric" defaultValue="1" />
            <div class="unit-radius">Miles</div>
          </div>
        </div>
        <div class="frame-4">
          <select class="polygon-2" name="genre" id="genre">
            <option value="Category">Category </option>
            <option value="Art">Art</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="History">History</option>
            <option value="Mystery/Thriller">Mystery/Thriller</option>
            <option value="Poetry">Poetry</option>
            <option value="Textbooks">Engineering</option>
          </select>
        </div>
        <div class="frame-5">
        <select class="text-wrapper-5" name="genre" id="genre">
        <option value="Add Filter">Add Filter </option>
            <option value="within-a-week">Within a Week </option>
            <option value="within-a-month">Within a Month </option>
            <option value="within-6-months">Within 6 Months </option>
            <option value="within-a-year">Within a Year </option>
            <option value="Shared by Friends">Shared by Friends </option>
          </select>
          {/* <img class="slider" src="https://c.animaapp.com/nm4Y9Hwe/img/slider@2x.png" /> */}
        </div>
        <div class="overlap">
          <div class="text-wrapper-6">Textbooks</div>
          {/* <img class="line" src="images/" /> */}
        </div>
        <div class="frame-6">
          <div class="frame-7">
          <Link to="/info">
            <img class="frame-8" src="/images/TheNatureofCode.png" alt="Information Is Beautiful" />
          </Link>
            <div class="overlap-group">
              <p class="p">
                <span class="span">The Nature of Code</span>
                {/* <span class="text-wrapper-7"> Simulating Natural Systems with Javascript</span> */}
              </p>
              <div class="text-wrapper-8">Daniel Shiffman</div>
            </div>
          </div>
          <div class="frame-9">
            <div class="overlap-2">
              <div class="text-wrapper-9">Information is Beautiful</div>
              <div class="text-wrapper-8">David McCandless</div>
            </div>
            <div class="frame-10">
            <img class="book-2" src="/Users/manzihuguesmucyo/Documents/Academics/Book Swap/book/src/images/InformationisBeautiful.png" />
            </div>
          </div>
          <div class="frame-9">
            <div class="frame-11"></div>
            <p class="div-2">
              <span class="span">STILL: The Art of Noticing</span> <span class="text-wrapper-7">&nbsp;</span>
            </p>
            <div class="text-wrapper-10">Mary Jo Hoffman</div>
          </div>
          <div class="frame-12">
            <div class="overlap-2">
              <div class="text-wrapper-9">Accidentally Wes Anderson</div>
              <div class="text-wrapper-8">Wally Koval</div>
            </div>
            <div class="frame-13"></div>
          </div>
          <div class="frame-14">
            <div class="frame-15"></div>
            <p class="div-2">
              <span class="span">World of Art <br /></span>
              <span class="text-wrapper-7">The Photograph as Contemporary Art</span>
            </p>
            <div class="text-wrapper-10">Charlotte Cotton</div>
          </div>
          <div class="frame-12">
            <div class="overlap-group">
              <p class="p">
                <span class="span">Cracking the Coding Interview</span>
                <span class="text-wrapper-7">: 189 Programming</span>
              </p>
              <div class="text-wrapper-8">Gayle Laakmann McDowell</div>
            </div>
            <div class="frame-16"></div>
          </div>
        </div>
        <img class="frame-17" src="https://c.animaapp.com/nm4Y9Hwe/img/frame-30.svg" />
        <div class="text-wrapper-11">Recent Additions</div>
        <div class="frame-18">
          <div class="frame-12">
            <div class="overlap-group">
              <p class="p">
                <span class="span">Cracking the Coding Interview</span>
                <span class="text-wrapper-7">: 189 Programming</span>
              </p>
              <div class="text-wrapper-8">Gayle Laakmann McDowell</div>
            </div>
            <div class="frame-19"></div>
          </div>
          <div class="frame-12">
            <div class="overlap-2">
              <div class="text-wrapper-9">Accidentally Wes Anderson</div>
              <div class="text-wrapper-8">Wally Koval</div>
            </div>
            <div class="frame-20"></div>
          </div>
          <div class="frame-9">
            <div class="frame-21"></div>
            <p class="div-2">
              <span class="span">The Nature of Code</span>
              <span class="text-wrapper-7"> Simulating Natural Systems with Javascript</span>
            </p>
            <div class="text-wrapper-10">Daniel Shiffman</div>
          </div>
          <div class="frame-14">
            <div class="frame-22"></div>
            <p class="div-2">
              <span class="span">World of Art <br /></span>
              <span class="text-wrapper-7">The Photograph as Contemporary Art</span>
            </p>
            <div class="text-wrapper-10">Charlotte Cotton</div>
          </div>
          <div class="frame-9">
            <div class="frame-23"></div>
            <p class="div-2">
              <span class="span">STILL: The Art of Noticing</span> <span class="text-wrapper-7">&nbsp;</span>
            </p>
            <div class="text-wrapper-10">Mary Jo Hoffman</div>
          </div>
          <div class="frame-9">
            <div class="overlap-2">
              <div class="text-wrapper-9">Information is Beautiful</div>
              <div class="text-wrapper-8">David McCandless</div>
            </div>
            <div class="frame-24"></div>
          </div>
        </div>
        <img class="frame-25" src="https://c.animaapp.com/nm4Y9Hwe/img/frame-39.svg" />
        <img class="line-2" src="https://c.animaapp.com/nm4Y9Hwe/img/line-4.svg" />
      </div>
    </div>
    </Container>
  );
};

export default HomePage;

