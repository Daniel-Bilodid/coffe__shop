import { React, useState } from "react";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";
import "./plan.scss";

let prefer = [
  ["Capsule", "Filter", "Espresso"],
  [
    "Compatible with Nespresso systems and similar brewers",
    "For pour over or drip methods like Aeropress, Chemex, and V60",
    "Dense and finely ground beans for an intense, flavorful experience",
  ],
];

let beanArr = [
  ["Single Origin", "Decaf", "Blended"],
  [
    "Distinct, high quality coffee from a specific family-owned farm",
    "Just like regular coffee, except the caffeine has been removed",
    "Combination of two or three dark roasted beans of organic coffees",
  ],
];

let quantArr = [
  ["250g", "500g", "1000g"],
  [
    "Perfect for the solo drinker. Yields about 12 delicious cups.",
    "Perfect option for a couple. Yields about 40 delectable cups.",
    "Perfect for offices and events. Yields about 90 delightful cups.",
  ],
];

let grindArr = [
  ["Wholebean", "Filter", "Cafetiére"],
  [
    "Best choice if you cherish the full sensory experience",
    "For drip or pour-over coffee methods such as V60 or Aeropress",
    "Course ground beans specially suited for french press coffee",
  ],
];

let deliverArr = [
  ["Every week", "Every 2 weeks", "Every month"],
  [
    "$7.20 per shipment. Includes free first-class shipping.",
    "$9.60 per shipment. Includes free priority shipping.",
    "$12.00 per shipment. Includes free priority shipping.",
  ],
];

const Plan = () => {
  let [pref, setPref] = useState("_____");
  let [pref1, setPref1] = useState("_____");
  let [bean, setBean] = useState("_____");
  let [quant, setQuant] = useState("_____");
  let [grind, setGrind] = useState("_____");
  let [deliver, setDeliver] = useState("_____");

  let [prefItem, setPrefItem] = useState();
  let [beanItem, setBeanItem] = useState();
  let [quantItem, setQuantItem] = useState();
  let [grindItem, setGrindItem] = useState();
  let [deliverItem, setDeliverItem] = useState();

  let [popup, setPopup] = useState(
    <>
      <div className="popup">
        <div className="popup__order">
          <span>Order Summary</span>
        </div>

        <div className="popup__descr">
          I drink my coffee as <span>{pref ? pref : "_____"}</span>, with a{" "}
          <span>{bean ? bean : "_____"}</span> type of bean.
          <span>{quant ? quant : "_____"}</span> ground ala{" "}
          <span>{grind ? grind : "_____"}</span>, sent to me{" "}
          <span>{deliver ? deliver : "_____"}</span>.
        </div>

        <div className="popup__verif">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </div>

        <div className="popup__sum-wrapper">
          <div className="popup__sum">$14.00 / mo</div>
          <button className="popup__sum-btn">Checkout</button>
        </div>
      </div>
    </>
  );

  return (
    <div className="plan">
      <div className="plan__hero">
        <div className="plan__hero-descr">
          <h1 className="plan__hero-h1">Create a plan</h1>
          <div className="plan__hero-text">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </div>
        </div>
      </div>
      <div className="plan__works">
        <div className="works plan__w">
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

              <div className="works__cart-title white">Pick your coffee</div>

              <div className="works__cart-descr white">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </div>
            </div>

            <div className="works__cart">
              <div className="works__cart-number">02</div>

              <div className="works__cart-title white">
                Choose the frequency
              </div>

              <div className="works__cart-descr white">
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </div>
            </div>

            <div className="works__cart">
              <div className="works__cart-number">03</div>

              <div className="works__cart-title white">Receive and enjoy!</div>

              <div className="works__cart-descr white">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="create">
        <div className="create__wrapper">
          <div className="create__list">
            <div
              className={`create__list-item ${
                prefItem
                  ? "create__list-item active__list"
                  : "create__list-item"
              }`}
              onClick={() => setPrefItem((prefItem = "active"))}
            >
              <span>01</span> Preferences
              <hr />
            </div>

            <div
              className={`create__list-item ${
                beanItem
                  ? "create__list-item active__list"
                  : "create__list-item"
              }`}
              onClick={() =>
                pref !== "_____"
                  ? setBeanItem((beanItem = "active"))
                  : setBeanItem()
              }
            >
              <span>02</span> Bean Type
              <hr />
            </div>

            <div
              className={`create__list-item ${
                quantItem
                  ? "create__list-item active__list"
                  : "create__list-item"
              }`}
              onClick={() =>
                bean !== "_____"
                  ? setQuantItem((quantItem = "active"))
                  : setQuantItem()
              }
            >
              <span>03</span> Quantity
              <hr />
            </div>

            <div
              className={`create__list-item ${
                grindItem && pref !== "Capsule" && quant !== "_____"
                  ? "create__list-item active__list"
                  : "create__list-item" && pref === "Capsule"
                  ? "banned__list"
                  : "create__list-item"
              }`}
              onClick={() =>
                pref !== "Capsule" && quant !== "_____"
                  ? setGrindItem((grindItem = "active"))
                  : setGrindItem()
              }
            >
              <span>04</span> Grind Option
              <hr />
            </div>

            <div
              className={`create__list-item ${
                deliverItem
                  ? "create__list-item active__list"
                  : "create__list-item"
              }`}
              onClick={() =>
                deliver
                  ? setDeliverItem((deliverItem = "active"))
                  : setDeliverItem()
              }
            >
              <span>05</span> Deliveries
              <hr />
            </div>
          </div>

          <div className="choice">
            <div className="choice__item">
              <div className="choice__item-wrapper">
                <div className="title__wrapper">
                  <div className="choice__item-title">
                    How do you drink your coffee?
                  </div>

                  <div
                    className={`choice__item-arrow  ${
                      prefItem
                        ? "choice__item-arrow  active__arrow"
                        : "choice__item-arrow "
                    }`}
                  >
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>

                <div className="choice__card-list">
                  {prefer[0].map((item, index) => {
                    return (
                      <>
                        <div
                          className={`choice__card-item ${prefItem} ${
                            pref === item && "active__item"
                          }`}
                          onClick={() =>
                            grind !== "_____" && item === "Capsule"
                              ? setPref(pref)
                              : setPref((pref = item))
                          }
                        >
                          <div className="choice__card-title">
                            <span>{item}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className="card">
                    <div className={` descr__wrapper  ${prefItem}`}>
                      {prefer[1].map((value, index) => {
                        //foreach try

                        return (
                          <>
                            <div
                              onClick={() => setPref1((pref1 = value))}
                              className={`choice__card-descr ${
                                pref1 === value
                                  ? "choice__card-active"
                                  : "choice__card-descr"
                              }`}
                            >
                              <span>{value}</span>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="title__wrapper">
                  <div className="choice__item-title">What type of coffee?</div>

                  <div
                    className={`choice__item-arrow  ${
                      beanItem
                        ? "choice__item-arrow  active__arrow"
                        : "choice__item-arrow "
                    }`}
                  >
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="choice__card-list">
                  {beanArr[0].map((item, index) => {
                    return (
                      <>
                        <div
                          className={`choice__card-item ${beanItem} ${
                            bean === item && "active__item"
                          }`}
                          onClick={() => setBean((bean = item))}
                        >
                          <div className="choice__card-title">
                            <span>{item}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className={` descr__wrapper  ${beanItem}`}>
                    {beanArr[1].map((value) => {
                      //foreach try

                      return (
                        <>
                          <div className={`choice__card-descr`}>
                            <span>{value}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="title__wrapper">
                  <div className="choice__item-title">
                    How much would you like?
                  </div>

                  <div
                    className={`choice__item-arrow  ${
                      quantItem
                        ? "choice__item-arrow  active__arrow"
                        : "choice__item-arrow "
                    }`}
                  >
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="choice__card-list">
                  {quantArr[0].map((item, index) => {
                    return (
                      <>
                        <div
                          className={`choice__card-item ${quantItem} ${
                            quant === item && "active__item"
                          }`}
                          onClick={() => setQuant((quant = item))}
                        >
                          <div className="choice__card-title">
                            <span>{item}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className={` descr__wrapper  ${quantItem}`}>
                    {quantArr[1].map((value) => {
                      //foreach try

                      return (
                        <>
                          <div className={`choice__card-descr`}>
                            <span>{value}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="title__wrapper">
                  <div className="choice__item-title">
                    Want us to grind them?
                  </div>

                  <div
                    className={`choice__item-arrow  ${
                      (grindItem
                        ? "choice__item-arrow  active__arrow"
                        : "choice__item-arrow ",
                      pref === "Capsule"
                        ? "choice__item-arrow "
                        : "choice__item-arrow")
                    }`}
                  >
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="choice__card-list">
                  {grindArr[0].map((item, index) => {
                    if (pref === "Capsule") {
                      return <></>;
                    } else {
                      return (
                        <>
                          <div
                            className={`choice__card-item ${grindItem} ${
                              grind === item && "active__item"
                            }`}
                            onClick={() => setGrind((grind = item))}
                          >
                            <div className="choice__card-title">
                              <span>{item}</span>
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                  <div className={` descr__wrapper  ${grindItem}`}>
                    {grindArr[1].map((value) => {
                      //foreach try
                      if (pref === "Capsule") {
                        return <></>;
                      } else {
                        return (
                          <>
                            <div className={`choice__card-descr`}>
                              <span>{value}</span>
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </div>

                <div className="title__wrapper">
                  <div className="choice__item-title">
                    How often should we deliver?
                  </div>

                  <div
                    className={`choice__item-arrow  ${
                      deliverItem
                        ? "choice__item-arrow  active__arrow"
                        : "choice__item-arrow "
                    }`}
                  >
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="choice__card-list">
                  {deliverArr[0].map((item, index) => {
                    return (
                      <>
                        <div
                          className={`choice__card-item ${deliverItem} ${
                            deliver === item && "active__item"
                          }`}
                          onClick={() => setDeliver((deliver = item))}
                        >
                          <div className="choice__card-title">
                            <span>{item}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className={` descr__wrapper  ${deliverItem}`}>
                    {deliverArr[1].map((value) => {
                      //foreach try

                      return (
                        <>
                          <div
                            className={`choice__card-descr  ${
                              value ? "active" : "choice__card-descr"
                            }`}
                          >
                            <span>{value}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="order">
                  <div className="order__sum">Order Summary</div>
                  <div className="order__descr">
                    I drink my coffee as <span>{pref ? pref : "_____"}</span>,
                    with a <span>{bean ? bean : "_____"}</span> type of bean.
                    <span>{quant ? quant : "_____"}</span> ground ala{" "}
                    <span>{grind ? grind : "_____"}</span>, sent to me{" "}
                    <span>{deliver ? deliver : "_____"}</span>.
                  </div>
                </div>
                <button
                  className={`order__button ${
                    pref && bean && quant && grind && deliver !== "_____"
                      ? "order__button-active"
                      : "order__button"
                  }`}
                  onClick={() => {
                    if (pref && bean && quant && grind && deliver !== "_____") {
                      console.log("done");
                      setPopup(
                        (popup = (
                          <>
                            <div className="popup popup__open">
                              <div className="popup__order">
                                <span>Order Summary</span>
                              </div>

                              <div className="popup__descr">
                                I drink my coffee as{" "}
                                <span>{pref ? pref : "_____"}</span>, with a{" "}
                                <span>{bean ? bean : "_____"}</span> type of
                                bean.
                                <span>{quant ? quant : "_____"}</span> ground
                                ala <span>{grind ? grind : "_____"}</span>, sent
                                to me <span>{deliver ? deliver : "_____"}</span>
                                .
                              </div>

                              <div className="popup__verif">
                                Is this correct? You can proceed to checkout or
                                go back to plan selection if something is off.
                                Subscription discount codes can also be redeemed
                                at the checkout.
                              </div>

                              <div className="popup__sum-wrapper">
                                <div className="popup__sum">$14.00 / mo</div>
                                <button className="popup__sum-btn">
                                  Checkout
                                </button>
                              </div>
                            </div>
                          </>
                        ))
                      );
                    } else {
                      console.log("fail");
                    }
                  }}
                >
                  <span>Create your plan</span>
                </button>
              </div>
            </div>
            {popup}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
