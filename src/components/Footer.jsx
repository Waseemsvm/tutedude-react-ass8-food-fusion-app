import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterStyles from "../styles/Footer.module.css";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import faTwitter from "../assets/images/twitter-brands-solid-full.svg";
import faLinkedIn from "../assets/images/linkedin-brands-solid-full.svg";
import faYouTube from "../assets/images/youtube-brands-solid-full.svg";
import faFacebook from "../assets/images/facebook-brands-solid-full.svg";
import { toast } from "react-toastify";

export default function Footer() {
  const notify = () =>
    toast.success("You are now subscribed!!", {
      autoClose: 800,
    });

  return (
    <div>
      <div className={FooterStyles["main-cont"]}>
        <div className={FooterStyles.col}>
          <h6>Company</h6>
          <div className={FooterStyles["col-cont"]}>
            <p>
              <a href="">Privacy Policy</a>
            </p>
            <p>
              <a href="">Terms and Conditions</a>
            </p>
            <p>
              <a href="">Return and Refund policy</a>
            </p>
          </div>
        </div>
        <div className={FooterStyles.col}>
          <h6>Contact</h6>
          <div className={FooterStyles["col-cont"]}>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <a href="">123 Street, New York, USA</a>{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} /> <a href="">+012 345 67890</a>
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="">info@example.com</a>
            </p>
            <div className={FooterStyles["social-cont"]}>
              <a href="">
                <img className={FooterStyles.social} src={faTwitter} alt="" />
              </a>
              <a href="">
                <img className={FooterStyles.social} src={faLinkedIn} alt="" />
              </a>
              <a href="">
                <img className={FooterStyles.social} src={faYouTube} alt="" />
              </a>
              <a href="">
                <img className={FooterStyles.social} src={faFacebook} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={FooterStyles.col}>
          <h6>Newsletter</h6>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              notify();
              if (document.querySelector("#newsletter"))
                document.querySelector("#newsletter").value = "";
            }}
          >
            <input
              id="newsletter"
              type="email"
              placeholder="Subscribe Now"
              className={FooterStyles.newsletter}
              required
            />
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
      <p className={FooterStyles.copy}>
        @Copy Waseem Akram P, All Rights Reserved
      </p>
    </div>
  );
}
