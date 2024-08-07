import { useEffect } from "react";
import FullScreen from "./pages/FullScreen";
import OURMENU from "./pages/OURMENU";
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to Multani Biryani";
        break;
      case "/OURMENU":
        title = "Our Menu";
        metaDescription = "Explore our delicious biryani menu";
        break;
      // Add more cases for other pages if needed
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FullScreen />} />
      <Route path="/OURMENU" element={<OURMENU />} />
    </Routes>
  );
}

export default App;
