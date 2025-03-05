import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.pageview(pathname); // Track page views
    console.log("pathname", pathname);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
