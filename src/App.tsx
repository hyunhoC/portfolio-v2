import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <BrowserRouter>
      <div>Hello</div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
