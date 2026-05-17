import { useEffect, useState } from "react";
import App from "./App";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import {
  NAVIGATION_EVENT,
  ROUTES,
  getLocationState,
  scrollToSection,
} from "./navigation";

const PAGES = {
  [ROUTES.home]: App,
  [ROUTES.contact]: ContactPage,
  [ROUTES.privacy]: PrivacyPolicyPage,
};

export default function AppRouter() {
  const [location, setLocation] = useState(() => getLocationState());

  useEffect(() => {
    const syncLocation = () => {
      setLocation(getLocationState());
    };

    window.addEventListener("popstate", syncLocation);
    window.addEventListener(NAVIGATION_EVENT, syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener(NAVIGATION_EVENT, syncLocation);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== ROUTES.home) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    if (location.hash) {
      scrollToSection(location.hash.slice(1));
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.hash, location.pathname]);

  const CurrentPage = PAGES[location.pathname] ?? App;

  return <CurrentPage />;
}
