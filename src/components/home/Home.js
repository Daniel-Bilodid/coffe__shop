import React from "react";
import "./home.scss";

import collection from "../../assets/home/desktop/Rectangle.png";
import gran from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import picollo from "../../assets/home/desktop/image-piccollo.png";
import danche from "../../assets/home/desktop/image-danche.png";
import coffeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";

const Home = () => {
  return (
    <div className="home">
      {/* <Nav></Nav> */}

      <div className="home__hero">
        {/* <img src={coffeHero} alt="coffeHero" className="home__hero-img" /> */}
        <div className="home__hero-descr">
          <h1 className="home__hero-h1">Great coffee made simple.</h1>
          <div className="home__hero-text">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </div>

          <button className="home__hero-button">Create your plan</button>
        </div>
      </div>

      <div className="home__collection">
        <div className="home__collection">
          <img src={collection} alt="collection" />
        </div>
        <div className="home__coffe-list">
          <div className="home__coffe-item">
            <img src={gran} alt="gran" />
            <div className="home__coffe-text">
              <div className="home__coffe-name">Gran Espresso</div>
              <div className="home__coffe-descr">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </div>
            </div>
          </div>

          <div className="home__coffe-item">
            <img src={planalto} alt="planato" />
            <div className="home__coffe-text">
              <div className="home__coffe-name">Planalto</div>
              <div className="home__coffe-descr">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts.
              </div>
            </div>
          </div>

          <div className="home__coffe-item">
            <img src={picollo} alt="picollo" />
            <div className="home__coffe-text">
              <div className="home__coffe-name">Piccollo</div>
              <div className="home__coffe-descr">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry.
              </div>
            </div>
          </div>

          <div className="home__coffe-item">
            <img src={danche} alt="danche" />
            <div className="home__coffe-text">
              <div className="home__coffe-name">Danche</div>
              <div className="home__coffe-descr">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose">
        <div className="choose__container">
          <div className="choose__title">Why choose us?</div>
          <div className="choose__descr">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </div>

          <div className="choose__cart-wrapper">
            <div className="choose__cart">
              <div className="choose__cart-img">
                <img src={coffeBean} alt="coffeBean" />
              </div>

              <div className="choose__cart-text">
                <div className="choose__cart-title">Best quality</div>

                <div className="choose__cart-descr">
                  Discover an endless variety of the world’s best artisan coffee
                  from each of our roasters.
                </div>
              </div>
            </div>

            <div className="choose__cart">
              <div className="choose__cart-img">
                {" "}
                <img src={gift} alt="gift" />
              </div>
              <div className="choose__cart-text">
                {" "}
                <div className="choose__cart-title">Exclusive benefits</div>
                <div className="choose__cart-descr">
                  Special offers and swag when you subscribe, including 30% off
                  your first shipment.
                </div>
              </div>
            </div>

            <div className="choose__cart">
              <div className="choose__cart-img dif">
                {" "}
                <img src={truck} alt="truck" />
              </div>
              <div className="choose__cart-text">
                <div className="choose__cart-title dif-title">
                  Free shipping
                </div>

                <div className="choose__cart-descr ">
                  We cover the cost and coffee is delivered fast. Peak
                  freshness: guaranteed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="works">
        <div className="works__title">How it works</div>
        <div className="circle__wrapper">
          <div className="works__circle-wrapper">
            <div className="works__circle"></div>

            <hr className="works__hr" />
          </div>
          <div className="works__hr-wrapper">
            <div className="works__circle"></div>
            <hr className="works__hr" />
            <div className="works__circle-third"></div>
          </div>
        </div>
        <div className="works__wrapper">
          <div className="works__cart">
            <div className="works__cart-number">01</div>

            <div className="works__cart-title">Pick your coffee</div>

            <div className="works__cart-descr">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </div>
          </div>

          <div className="works__cart">
            <div className="works__cart-number">02</div>

            <div className="works__cart-title">Choose the frequency</div>

            <div className="works__cart-descr">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </div>
          </div>

          <div className="works__cart">
            <div className="works__cart-number">03</div>

            <div className="works__cart-title">Receive and enjoy!</div>

            <div className="works__cart-descr">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </div>
          </div>
        </div>
        <div className="works__button-wrapper">
          <button className="works__button">
            <span>Create your plan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
