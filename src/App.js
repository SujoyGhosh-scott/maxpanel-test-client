import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Auth from "./Auth";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
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
