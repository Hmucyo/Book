import React from 'react';
import {Link} from 'react-router-dom';

const BookInfoPage = () => {
    return (
        <div class="book-information">
        <div class="div">
          <img class="image" src="https://c.animaapp.com/zLXIMVIQ/img/image-4@2x.png" />
          <img class="img" src="https://c.animaapp.com/zLXIMVIQ/img/image-7@2x.png" />
          <div class="top-bar">
            <div class="frame">
              <div class="text-wrapper">19104</div>
              <img class="location-on" src="https://c.animaapp.com/zLXIMVIQ/img/location-on.svg" />
              <img class="polygon" src="https://c.animaapp.com/zLXIMVIQ/img/polygon-1.svg" />
            </div>
            <div class="frame-2">
              <img class="search" src="https://c.animaapp.com/zLXIMVIQ/img/search.svg" />
              <div class="text-wrapper-2">Search</div>
            </div>
            <img class="bookmark" src="https://c.animaapp.com/zLXIMVIQ/img/bookmark.svg" />
            <img class="icon-comment" src="https://c.animaapp.com/zLXIMVIQ/img/---icon--comment-@2x.png" />
            <img class="group" src="https://c.animaapp.com/zLXIMVIQ/img/group-27@2x.png" />
            <img class="account-circle" src="https://c.animaapp.com/zLXIMVIQ/img/account-circle.svg" />
            
            <Link to="/home">
              <img class="logo" src="https://c.animaapp.com/zLXIMVIQ/img/image-9@2x.png" />
            </Link>
          </div>
          <img class="bookmark-2" src="https://c.animaapp.com/zLXIMVIQ/img/bookmark-1.svg" />
          <img class="image-3" src="https://c.animaapp.com/zLXIMVIQ/img/image-5@2x.png" />
          <img class="image-4" src="https://c.animaapp.com/zLXIMVIQ/img/image-6@2x.png" />
          <div class="div-wrapper"><div class="text-wrapper-3">Request Book</div></div>
          <div class="frame-3"><div class="text-wrapper-4">Send Message to Owner</div></div>
          <div class="overlap">
            <div class="text-wrapper-5">Information is Beautiful</div> 
            <div class="text-wrapper-6">David McCandless</div>
            <div class="text-wrapper-7">Added 4 hours ago</div>
          <div class="text-wrapper-9">
          <img class="vector" src="https://c.animaapp.com/zLXIMVIQ/img/vector.svg" />
            <div class = "owner">Bob Bob</div> 
            </div>
          <p class="student-university">Student @ University of Pennsylvania<br />Joined Book Swap in 2024</p>
          </div>
          <div class="text-wrapper-8">Book Description</div>
          <p class="p">
            A visual guide to how the world really works, through stunning infographics and data visualisations,
            thoroughly revised, recalculated and reimagined for this new edition.
          </p>
          <div class="text-wrapper-10">Owner Review</div>
          <p class="text-wrapper-11">
            I bought this book 2 years ago. It’s a visual guide in presenting information, from infographics to data
            visualizations. Overall, it’s in good condition with all pages intact. The spine is slightly worn down, but
            the pages don’t have any markings.
          </p>
          <img class="vector-2" src="https://c.animaapp.com/zLXIMVIQ/img/vector-3.svg" />
          <div class="text-wrapper-12">More From This User</div>
          <div class="frame-wrapper">
            <div class="frame-4">
              <div class="frame-5">
                <div class="image-wrapper">
                  <img class="image-5" src="https://c.animaapp.com/zLXIMVIQ/img/image-2@2x.png" />
                </div>
                <div class="overlap-group">
                  <p class="div-2">
                    <span class="span">The Nature of Code</span>
                    <span class="text-wrapper-13"> Simulating Natural Systems with Javascript</span>
                  </p>
                  <div class="text-wrapper-14">Daniel Shiffman</div>
                </div>
              </div>
              <div class="frame-6">
                <div class="image-wrapper">
                  <img class="image-5" src="https://c.animaapp.com/zLXIMVIQ/img/image-8@2x.png" />
                </div>
                <p class="div-3">
                  <span class="span">STILL: The Art of Noticing</span> <span class="text-wrapper-13">&nbsp;</span>
                </p>
                <div class="text-wrapper-15">Mary Jo Hoffman</div>
              </div>
              <div class="frame-7">
                <div class="overlap-2">
                  <div class="text-wrapper-16">Accidentally Wes Anderson</div>
                  <div class="text-wrapper-14">Wally Koval</div>
                </div>
                <div class="image-wrapper">
                  <img class="image-5" src="https://c.animaapp.com/zLXIMVIQ/img/image@2x.png" />
                </div>
              </div>
              <div class="frame-8">
                <div class="image-wrapper">
                  <img class="image-5" src="https://c.animaapp.com/zLXIMVIQ/img/image-1@2x.png" />
                </div>
                <p class="div-3">
                  <span class="span">World of Art <br /></span>
                  <span class="text-wrapper-13">The Photograph as Contemporary Art</span>
                </p>
                <div class="text-wrapper-15">Charlotte Cotton</div>
              </div>
              <div class="frame-7">
                <div class="overlap-group">
                  <p class="div-2">
                    <span class="span">Cracking the Coding Interview</span>
                    <span class="text-wrapper-13">: 189 Programming</span>
                  </p>
                  <div class="text-wrapper-14">Gayle Laakmann McDowell</div>
                </div>
                <div class="image-wrapper">
                  <img class="image-5" src="https://c.animaapp.com/zLXIMVIQ/img/image-3@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookInfoPage;
