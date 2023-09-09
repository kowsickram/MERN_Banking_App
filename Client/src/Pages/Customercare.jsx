import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function CustomerCare() {
  const [message, setMessage] = useState("");
  const msg = "Thanks For Rating 😉";

  const ratingChanged = (newRating) => {
    console.log(newRating);
    alert(`${msg}`);
  };

  function handleSendMessage() {
    const emailLink = `mailto:kowsickram05122001@gmail.com?subject=Customer Support Request&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = emailLink;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black w-full md:w-1/2 p-4 rounded-lg shadow-lg">
        <center>
          <h1 className="text-3xl font-bold text-white">Customer Care</h1>

          <p className="text-white">Please enter your message below:</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-grey-500 border rounded-lg p-2 w-full h-32"
          />
          <br />

          <div className="mt-4 text-center">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={40}
              color="blue"
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd708"
            />
          </div>
          <button
            onClick={handleSendMessage}
            className=" bg-violet-950 text-white  px-4 py-2 mt-4 rounded-lg hover:bg-violet-800 focus:outline-none focus:bg-blue-600"
          >
            Send Message
          </button>
        </center>
      </div>
    </div>
  );
}

export default CustomerCare;
