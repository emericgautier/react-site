import React from "react";

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="hhtps://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>

        <a
          href="hhtps://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>

        <a
          href="hhtps://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
