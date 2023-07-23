import React from "react";
import hero from "../../assets/about/desktop/image-hero-whitecup.jpg";
import coffeMaker from "../../assets/about/desktop/image-commitment.jpg";
import quality from "../../assets/about/desktop/image-quality.jpg";
import uk from "../../assets/about/desktop/illustration-uk.svg";
import canada from "../../assets/about/desktop/illustration-canada.svg";
import australia from "../../assets/about/desktop/illustration-australia.svg";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <img src={hero} alt="hero" />
      </div>
      <div className="about__hero-wrapper">
        <div className="about__hero-title">About Us</div>

        <div className="about__hero-descr">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </div>
      </div>

      <div className="about__descr">
        <img src={coffeMaker} alt="coffeMaker" />

        <div className="about__descr-wrapper">
          <div className="about__descr-title">Our commitment</div>

          <div className="about__descr-text">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </div>
        </div>
      </div>

      <div className="quality">
        <div className="quality__wrapper">
          <div className="quality__text-wrapper">
            <div className="quality__text">Uncompromising quality</div>

            <div className="quality__descr">
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </div>
          </div>
          <div className="quality__img">
            <img src={quality} alt="quality" />
          </div>
        </div>
      </div>

      <div className="contacts">
        <div className="contacts__title">Our headquarters</div>

        <div className="contacts__wrapper">
          <div className="contacts__card">
            <div className="contacts__img">
              <img src={uk} alt="uk" />
            </div>
            <div className="contacts__card-title">United Kingdom</div>
            <div className="contacts__card-info">
              68 Asfordby Rd <br />
              Alcaston <br />
              SY6 1YA <br />
              +44 1241 918425
            </div>
          </div>

          <div className="contacts__card">
            <div className="contacts__img">
              <img src={canada} alt="canada" />
            </div>
            <div className="contacts__card-title">Canada</div>
            <div className="contacts__card-info">
              1528 Eglinton Avenue <br />
              Toronto <br />
              Ontario M4P 1A6 <br />
              +1 416 485 2997
            </div>
          </div>

          <div className="contacts__card dif__card">
            <div className="contacts__img">
              <img src={australia} alt="australia" />
            </div>
            <div className="contacts__card-title">Australia</div>
            <div className="contacts__card-info">
              36 Swanston Street <br />
              Kewell <br />
              Victoria <br />
              +61 4 9928 3629
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
