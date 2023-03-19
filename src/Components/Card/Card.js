import React, { useState } from "react";
import Button from "../UI/Button";
import RateNumber from "../UI/RateNumber";
import WrapperCard from "../UI/WrapperCard";
// import "./Card.scss";

const rateNumbersArr = [1, 2, 3, 4, 5];
const Card = function () {
  const [rateNumber, setRateNumber] = useState();
  const [changecardUI, setChangecardUI] = useState(true);
  console.log(rateNumber);
  const rateNumberHandler = function (e) {
    setRateNumber(e.target.innerText);
  };

  const cardUIHandler = function () {
    setChangecardUI(false);
  };

  return (
    <WrapperCard>
      {changecardUI ? (
        <div className="rate-card">
          <img src="../image/logo.svg" />
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="number-container">
            {rateNumbersArr.map((element) => (
              <RateNumber
                className={rateNumber == element && "rate-number-active"}
                onClick={rateNumberHandler}
                numbers={element}
                key={Math.random().toString()}
              />
            ))}
          </ul>
          <Button type="submit" onClick={cardUIHandler}>
            Submit
          </Button>
        </div>
      ) : (
        <div className="rated-card">
          <img className="rated-card__img" src="../image/rated-card.svg" />
          <p className="rated-card__result">
            You selected {rateNumber} out of {rateNumbersArr.length}
          </p>
          <h2 className="rated-card__heading">Thank you!</h2>
          <p className="rated-card__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </WrapperCard>
  );
};

export default Card;
