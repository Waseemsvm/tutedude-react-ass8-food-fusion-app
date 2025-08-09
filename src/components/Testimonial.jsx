import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestimonialStyles from "../styles/Main.module.css";

export default function Testimonial({ text, img, author }) {
  return (
    <div className={TestimonialStyles.testimonial}>
      <p>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </p>
      <div className={TestimonialStyles.author}>
        <img src={img} alt="" />
        <div>
          <p className={TestimonialStyles["author-text"]}>{text}</p>
          <p className={TestimonialStyles["author-name"]}>{author}</p>
        </div>
      </div>
    </div>
  );
}
