import MainStyles from "../styles/Main.module.css";
import heroImg from "../assets/images/hero.png";
import {
  faUserTie,
  faUtensils,
  faCartPlus,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactLiteCarousel } from "react-lite-carousel";
import Testimonial from "./Testimonial";

import testimonial1 from "../assets/images/testimonial-1.jpg";
import testimonial2 from "../assets/images/testimonial-2.jpg";
import testimonial3 from "../assets/images/testimonial-3.jpg";
import TeamCard from "./TeamCard";

import chef1 from "../assets/images/team-1.jpg";
import chef2 from "../assets/images/team-2.jpg";
import chef3 from "../assets/images/team-3.jpg";
import chef4 from "../assets/images/team-4.jpg";

export default function Main() {
  return (
    <div>
      <div className={MainStyles.hero}>
        <div className={MainStyles["hero-cont"]}>
          <div className={MainStyles.row}>
            <div className={`${MainStyles["col-1"]} ${MainStyles["col"]}`}>
              <h1>Enjoy Our Delicious Meal</h1>
              <p>
                Savor a perfect blend of flavors from around the world, crafted
                with fresh ingredients and a touch of creativity. At Food
                Fusion, every dish is made to delight your taste buds and bring
                comfort to your soul. Whether you crave classic favorites or
                bold new flavors, we've got something for everyone.
              </p>
            </div>
            <div className={`${MainStyles["col-2"]} ${MainStyles["col"]}`}>
              <img src={heroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div className={MainStyles.features}>
        <div className={MainStyles["feature-card"]}>
          <div>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h4>Master Chefs</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum
            ad eaque soluta laboriosam.
          </div>
        </div>
        <div className={MainStyles["feature-card"]}>
          <div>
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <h4>Quality Food</h4>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum
            ad eaque soluta laboriosam.
          </div>
        </div>
        <div className={MainStyles["feature-card"]}>
          <div>
            <FontAwesomeIcon icon={faCartPlus} />
          </div>
          <h4>Online Order</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum
            ad eaque soluta laboriosam.
          </div>
        </div>
        <div className={MainStyles["feature-card"]}>
          <div>
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <h4>24/7 Service</h4>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum
            ad eaque soluta laboriosam.
          </div>
        </div>
      </div>
      <div className={MainStyles["team"]}>
        <h2 className={MainStyles["team-header"]}>Team Members</h2>
        <div className={MainStyles['team-cont']}>
          <TeamCard
            img={chef1}
            name={"Chef Arjun Kapoor"}
            designation={"Head Chef & Culinary Director"}
          />
          <TeamCard
            img={chef2}
            name={"Chef Daniel Brooks"}
            designation={"Grill & BBQ Specialist"}
          />
          <TeamCard
            img={chef3}
            name={"Chef Marcus Lee"}
            designation={"Fusion Cuisine Expert"}
          />
          <TeamCard
            img={chef4}
            name={"Chef Priya Sharma"}
            designation={"Executive Chef"}
          />
        </div>
      </div>
      <div className={MainStyles["testimonial-cont"]}>
        <h2 className={MainStyles["testimonial-header"]}>Testimonials</h2>
        <ReactLiteCarousel
          autoPlay={false}
          autoPlayInterval={3000}
          btnRounded={true}
          btnArrowColor="white"
          btnBackgroundColor="black"
        >
          <Testimonial
            img={testimonial1}
            author={"Sofia Fernandez"}
            text={
              "Every bite feels like a journey around the world. The flavors are fresh, unique, and absolutely unforgettable!"
            }
          />
          <Testimonial
            img={testimonial2}
            author={"Aarav Mehta"}
            text={
              "Food Fusion has completely changed the way I think about dining. The mix of cuisines is genius, and the presentation is stunning"
            }
          />
          <Testimonial
            img={testimonial3}
            author={"Liam Carter"}
            text={
              "From the first bite to the last, its pure perfection. Easily my go-to place whenever I want to treat myself."
            }
          />
        </ReactLiteCarousel>
      </div>
    </div>
  );
}
