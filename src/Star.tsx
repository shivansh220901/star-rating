import { useState } from "react";

const Star = ({ count = 5 }) => {
  const arr = new Array(count).fill(0);
  const [starToShow, setStarToShow] = useState();
  const [hover, setHover] = useState(0);
  console.log(starToShow);
  return (
    <div>
      {arr.map((_, index) => (
        <span
          onClick={() => setStarToShow(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
          className={`star ${
            (hover === 0 && index < starToShow) || index < hover ? "gold" : ""
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Star;
