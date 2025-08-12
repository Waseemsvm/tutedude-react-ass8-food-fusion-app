import AboutPageStyles from "../styles/AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={AboutPageStyles.container}>
      <h2>About Us</h2>
      <div className={AboutPageStyles.section}>
        <p>
          At Food Fusion, we believe that food is more than just a meal — it's
          an experience. Our mission is to bring together flavors from across
          the globe, prepared with love, creativity, and a commitment to
          quality. Whether you're here for a hearty breakfast, a quick lunch, or
          a delightful dinner, we promise every bite will leave you wanting
          more.
        </p>
      </div>
      <div className={AboutPageStyles.section}>
        <h3>Our Story</h3>
        <p>
          It all started with a simple idea — to blend traditional recipes with
          modern cooking styles. What began as a small home kitchen experiment
          has grown into a culinary hub loved by foodies far and wide. Our chefs
          work tirelessly to craft dishes that not only taste amazing but also
          tell a story. From farm-fresh ingredients to unique flavor
          combinations, every plate is designed to be memorable.
        </p>
      </div>
      <div className={AboutPageStyles.section}>
        <h3>Our Values</h3>
        <ul>
          <li>
            {" "}
            <strong> Quality First</strong> - We source only the freshest and
            highest-quality ingredients.{" "}
          </li>
          <li>
            <strong>Innovation in Every Bite</strong> - Blending cuisines and
            techniques to create unforgettable flavors.
          </li>
          <li>
            <strong>Customer Delight</strong> - Serving with warmth, care, and a
            smile, every time.
          </li>
        </ul>
      </div>

      <div className={AboutPageStyles.section}>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            {" "}
            <strong> Fresh Ingredients Daily</strong> - Straight from the market
            to your plate.
          </li>
          <li>
            <strong>Authentic & Fusion Dishes</strong> - A mix of local and
            global flavors.
          </li>
          <li>
            <strong>Cozy Ambience</strong> - Perfect for family dinners,
            romantic dates, or friendly get-togethers.
          </li>
        </ul>
      </div>
    </div>
  );
}
