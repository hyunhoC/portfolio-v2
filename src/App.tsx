import { BrowserRouter, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import BackgroundAnimation from "./BackgroundAnimation/BackgroundAnimation";

const App = () => {
  return (
    <BrowserRouter>
      <BackgroundAnimation />
      <div>Hello</div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
