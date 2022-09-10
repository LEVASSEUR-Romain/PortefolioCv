import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Main from "./page/main/Main";
// import scss
import "./index.scss";
import "./scss/variable.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cv from "./page/cv/Cv";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Mettre a jour CV et mentions légale Politique de confidentialité linkedin
// responsive
//formulaire envoyer

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cv" element={<Cv />} />
        {/*         <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
