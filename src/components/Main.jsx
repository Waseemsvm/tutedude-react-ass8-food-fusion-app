import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import CartPage from "./CartPage";
import MenuPage from "./MenuPage";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
