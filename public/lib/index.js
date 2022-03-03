import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Projects from "./pages/projects.js";
const header = new Header("#header");
header.render();
const footer = new Footer("#footer");
footer.render();
const projects = new Projects("#content");
projects.render();
