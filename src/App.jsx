import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
