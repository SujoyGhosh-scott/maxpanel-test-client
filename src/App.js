import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import mixpanel from "mixpanel-browser";

import Home from "./Home";
import Auth from "./Auth";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  debug: true,
  track_pageview: true,
  ignore_dnt: true,
});

function App() {
  useEffect(() => {
    let pageEnterTime = Date.now();

    const userInfo = JSON.parse(localStorage.getItem("userinfo"));

    // Track user details in Mixpanel pageview event and record page enter time
    if (userInfo) {
      console.log("tracking");
      mixpanel.track("pageview", {
        userId: userInfo.userId,
        email: userInfo.email,
        page: window.location.pathname,
      });
    }

    const trackPageDuration = () => {
      let pageExitTime = Date.now();
      let durationInSeconds = Math.round((pageExitTime - pageEnterTime) / 1000);

      alert("tracking");

      mixpanel.track("pageview", {
        userId: userInfo.userId,
        email: userInfo.email,
        page: window.location.pathname,
        duration: durationInSeconds,
      });
    };

    // Attach an event listener to track page exit
    window.addEventListener("beforeunload", trackPageDuration);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", trackPageDuration);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/auth" element={<Auth />} />
      <Route element={<h1>No page found</h1>} />
    </Routes>
  );
}

export default App;
