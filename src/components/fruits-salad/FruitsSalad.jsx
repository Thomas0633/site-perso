import React from 'react';
import './fruitsSalad.css';

const FruitsSalad = () => {
  return(
    <div>
      <header>
        <div id="blockHeader">
          <div id="blockLogo">
            <img id="logoImg" src="ressources\fruits-salad\images\logo-23.png" />
          </div>
          <nav>
            <ul id="menuHeader">
              <li><a href="#" className="lienMenuHeader">Home</a></li>
              <li><a href="#" className="lienMenuHeader">About</a></li>
              <li><a href="#" className="lienMenuHeader">Blog</a></li>
              <li><a href="#" className="lienMenuHeader">Pages</a></li>
              <li><a href="#" className="lienMenuHeader">Gallery</a></li>
              <li><a href="#" className="lienMenuHeader">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div id="section1">
        <div id="articles">
          <div id="article1">
            <div id="cercleArticle1"></div>
            <h3>ALIQUAM BIBENDUM</h3>
            <p>Ambrosia is a Traditional fruit salad</p>
          </div>
          <div id="article2">
            <div id="cercleArticle2"></div>
            <h3>QUISQUE PHARETRA</h3>
            <p>Ambrosia is a Traditional fruit salad</p>
          </div>
        </div>
      </div>

      <div id="section2">
        <h1>Welcome To Our Salads</h1>
        <p>Ambrosia is a variation on the traditional fruit salad. Most ambrosia recipes contain fresh or sweetened pineapple, mandarin, oranges or fresh orange sections, miniature marshmallows, [1] and coconut. [2]</p>

        <div id="selectSaladContainer">
          <div id="selectSalad">
            <div id="vignette1" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-1.jpg" /></div>
            <div id="vignette2" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-2.jpg" /></div>
            <div id="vignette3" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-3.jpg" /></div>
            <div id="vignette4" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-4.jpg" /></div>
            <div id="vignette5" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-5.jpg" /></div>
            <div id="vignette6" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-6.jpg" /></div>
            <div id="vignette7" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-7.jpg" /></div>
            <div id="vignette8" className="vignetteSelectSalad"><img src="ressources\fruits-salad\images\port-8.jpg" /></div>
          </div>

          <div id="textSelectSalad">
            <h2>Vitae elementum diam molestie</h2>
            <p>Maecenas interdum augue eget elit interdum, vitae elementum diam molestie. Nulla facilisi. Phasellus tempor erat id erat gravida pulvnar. Aenean est felis, ullamcorper et volutpat sed, cursus at enim. Vestibulum vel finibus neque. In sed magna tellus. Phasellus tempor erat id erat gravida pulvinar. Aenan est felis, ullamcorper et voluptat sed, cursus at enim. Vestibulum vel finibus neque. In sed magna tellus.</p>
          </div>
        </div>
      </div>

      <div id="section3">
        <h1>Our Best Salads</h1>
        <div id="vignettesBestSaladsGlobal">
          <div id="vignettesBestSalads1">
            <p className="superposBestSalads">Orange Salad</p>
            <img src="ressources\fruits-salad\images\o-1.jpg" />
          </div>
          <div id="vignettesBestSalads2">
            <p className="superposBestSalads">Mixed Salad</p>
            <img src="ressources\fruits-salad\images\o-2.jpg" />
          </div>
          <div id="vignettesBestSalads3">
            <p className="superposBestSalads">Strawberry Salad</p>
            <img src="ressources\fruits-salad\images\o-3.jpg" />
          </div>
          <div id="vignettesBestSalads4">
            <p className="superposBestSalads">Grape Salad</p>
            <img src="ressources\fruits-salad\images\o-5.jpg" />
          </div>
        </div>
      </div>

      <div id="section4">
        <div id="backgroundSection4">
          <div id="blancSection4">
            <div className="vignettesBestSalads">
              <h2>Quisque sed neque</h2>
              <p>Maecenas interdum augue eget elit interdum, vitae elementum diam molestie. Nulla facilisi.</p>
              <div className="buttonReadMore">
                <p>Read More</p>
              </div>
            </div>
            <div className="vignettesBestSalads">
              <h2>Donec mattis nunc</h2>
              <p>Maecenas interdum augue eget elit interdum, vitae elementum diam molestie. Nulla facilisi.</p>
              <div className="buttonReadMore">
                <p>Read More</p>
              </div>
            </div>
            <div className="vignettesBestSalads">
              <h2>Maecenas non risus</h2>
              <p>Maecenas interdum augue eget elit interdum, vitae elementum diam molestie. Nulla facilisi.</p>
              <div className="buttonReadMore">
                <p>Read More</p>
              </div>
            </div>
            <div className="vignettesBestSalads">
              <h2>Nullam vitae nisl</h2>
              <p>Maecenas interdum augue eget elit interdum, vitae elementum diam molestie. Nulla facilisi.</p>
              <div className="buttonReadMore">
                <p>Read More</p>
              </div>
            </div>
          </div>

          <div id="blockTextSection4">
            <div id="textSection4">
              <h1>Maecenas ornare lobortis</h1>
              <p>Fruit salad is a dish consisting of various kinds of fruits, sometimes served in a liquid, either in their own juices or a syrup. When served as an appetizer or as a dessert , a fruit salad is sometimes known as a fruit cocktail or a fruit cup. In different forms fruit salad can be served as an appetizer, a side-salad or a dessert.</p>
            </div>
          </div>
          <img src="ressources\fruits-salad\images\bg-1.jpg" />
        </div>
      </div>

      <footer className='footerFruits'>
        <div id="diversFooter">
          <div id="servicesFooter">
            <h2>Services</h2>
            <ul>
              <li>Contact Customer Service</li>
              <li>Free Delivery</li>
              <li>View your Wishlist</li>
              <li>Ring Size Guide</li>
              <li>Returns</li>
            </ul>
          </div>
          <div id="informationFooter">
            <h2>Information</h2>
            <ul>
              <li>Gift certificates</li>
              <li>Jewellery care guide</li>
              <li>International customers</li>
              <li>Wholesale enquires</li>
              <li>Returns</li>
            </ul>
          </div>
          <div id="detailsFooter">
            <h2>More details</h2>
            <ul>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Terms &amp; condition</li>
              <li>Secure payment</li>
              <li>Site map</li>
            </ul>
          </div>
          <div id="contactFooter">
            <h2>Contact us</h2>
            <div id="contactFooterImgText">
              <img src="ressources\fruits-salad\images\footer-icons.png" />
              <ul>
                <li>Newyork Still Road</li>
                <li>mail@example.com</li>
                <li>756 gt Globel Place</li>
              </ul>
            </div>
            <img src="ressources\fruits-salad\images\social-icons.png" />
          </div>
        </div>

        <div id="legalFooter">
          <div id="flecheFooter">
            <img src="ressources\fruits-salad\images\top-arrow.png" />
          </div>
          <div id="textLegalFooter">
            <p>&copy; 2015 Fruit_salad. All rights reserved | Design by W3layouts</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FruitsSalad;