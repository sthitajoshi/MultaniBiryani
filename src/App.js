import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType
} from "react-router-dom";
import FullScreen from "./pages/FullScreen";


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

        break;
      case "/OURMENU":
        title = "Our Menu"; // Set title for OUR MENU page
        metaDescription = "Explore our delicious biryani menu"; // Set meta description for OUR MENU page
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
      <Route path="/menu" element={"/OURMENU" }/>
    </Routes>
  );
}
export default App;
