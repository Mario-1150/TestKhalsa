import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PrincipleHome from "./pages/PrincipleHome";
import GettingStartedUpload from "./pages/GettingStartedUpload";
import GettingStartedUpload1 from "./pages/GettingStartedUpload1";
import GettingStartedUpload2 from "./pages/GettingStartedUpload2";
import AboutUs from "./pages/AboutUs";

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
        title = "";
        metaDescription = "";
        break;
      case "/getting-startedupload-2":
        title = "";
        metaDescription = "";
        break;
      case "/getting-startedupload-3":
        title = "";
        metaDescription = "";
        break;
      case "/3-getting-startedupload":
        title = "";
        metaDescription = "";
        break;
      case "/2-about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PrincipleHome />} />
      <Route
        path="/getting-startedupload-2"
        element={<GettingStartedUpload />}
      />
      <Route
        path="/getting-startedupload-3"
        element={<GettingStartedUpload1 />}
      />
      <Route
        path="/3-getting-startedupload"
        element={<GettingStartedUpload2 />}
      />
      <Route path="/2-about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
