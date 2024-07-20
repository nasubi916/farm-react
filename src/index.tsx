import { createRoot } from "react-dom/client";
import { App } from "./pages/router";

const container = document.querySelector("#root");
if (container == null) throw new Error("No root element found");
const root = createRoot(container);

root.render(<App />);
