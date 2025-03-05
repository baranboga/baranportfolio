import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("pathname", pathname);
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);
  return null;
}

export default ScrollToTop;
