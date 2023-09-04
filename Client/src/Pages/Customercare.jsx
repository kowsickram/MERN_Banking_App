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
    <div>
    <center>
      <h1 className="feedback">Customer Care</h1>
      
      <p>Please enter your message below:</p>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />

      <div
        className="stars"
        style={{
          maxWidth: "100%",
          display: "flex"
        }}
      >
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
      <button onClick={handleSendMessage}>Send Message</button>
      </center>
    </div>
  );
}

export default CustomerCare;
