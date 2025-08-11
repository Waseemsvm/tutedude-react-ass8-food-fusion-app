import HomePageStyles from "../styles/Main.module.css";
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
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={HomePageStyles.hero}>
        <div className={HomePageStyles["hero-cont"]}>
          <div className={HomePageStyles.row}>
            <div
              className={`${HomePageStyles["col-1"]} ${HomePageStyles["col"]}`}
            >
              <h1>Enjoy Our Delicious Meal</h1>
              <p>
                Savor a perfect blend of flavors from around the world, crafted
                with fresh ingredients and a touch of creativity. At Food
                Fusion, every dish is made to delight your taste buds and bring
                comfort to your soul. Whether you crave classic favorites or
                bold new flavors, we've got something for everyone.
              </p>
              <button
                onClick={(e) => {
                  navigate("menu");
                }}
              >
                Order Now
              </button>
            </div>
            <div
              className={`${HomePageStyles["col-2"]} ${HomePageStyles["col"]}`}
            >
              <img src={heroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <div className={HomePageStyles.features}>
        <div className={HomePageStyles["feature-card"]}>
          <div className={HomePageStyles["feature-icon"]}>
            <FontAwesomeIcon icon={faUserTie} />
          </div>
          <h4 className={HomePageStyles["feature-head"]}>Master Chefs</h4>
          <div className={HomePageStyles["feature-cont"]}>
            Our team of seasoned culinary experts brings passion and creativity
            to every plate. From traditional favorites to innovative fusion
            dishes, our master chefs ensure every meal is a masterpiece.
          </div>
        </div>
        <div className={HomePageStyles["feature-card"]}>
          <div className={HomePageStyles["feature-icon"]}>
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <h4 className={HomePageStyles["feature-head"]}>Quality Food</h4>
          <div className={HomePageStyles["feature-cont"]}>
            At Food Fusion, quality isn't just a promise — it's a standard. We
            source the freshest ingredients, prepare every dish with care, and
            make sure each bite delivers a burst of flavor and satisfaction.
          </div>
        </div>
        <div className={HomePageStyles["feature-card"]}>
          <div className={HomePageStyles["feature-icon"]}>
            <FontAwesomeIcon icon={faCartPlus} />
          </div>
          <h4 className={HomePageStyles["feature-head"]}>Online Order</h4>
          <div className={HomePageStyles["feature-cont"]}>
            With just a few clicks, your next delicious meal is on its way. Our
            easy-to-use online ordering system ensures a smooth experience,
            letting you browse, customize, and place your order without a
            hassle.
          </div>
        </div>
        <div className={HomePageStyles["feature-card"]}>
          <div className={HomePageStyles["feature-icon"]}>
            <FontAwesomeIcon icon={faHeadset} />
          </div>
          <h4 className={HomePageStyles["feature-head"]}>24/7 Service</h4>
          <div className={HomePageStyles["feature-cont"]}>
            No matter the time — early morning cravings, midnight hunger, or a
            lazy Sunday afternoon — Food Fusion is here for you around the
            clock. Our kitchens never sleep, so you can enjoy your favorite
            meals anytime you want.
          </div>
        </div>
      </div>
      <div className={HomePageStyles["team"]}>
        <h2 className={HomePageStyles["team-header"]}>Team Members</h2>
        <div className={HomePageStyles["team-cont"]}>
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
      <div className={HomePageStyles["testimonial-cont"]}>
        <h2 className={HomePageStyles["testimonial-header"]}>Testimonials</h2>
        <ReactLiteCarousel
          autoPlay={true}
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
