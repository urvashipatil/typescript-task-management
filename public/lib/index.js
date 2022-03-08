import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Projects from "./pages/projects.js";
import store from "./store/store.js";
// const store = new Kel({ projects: [{id:1,name:"Ecommerce"},{id:2,name:"Blog"}] });
const header = new Header("#header");
header.render();
const footer = new Footer("#footer");
footer.render();
const projects = new Projects("#content", store);
projects.render();
store.on("changeProject", function (val) {
    console.log("changeProject", val);
    projects.render();
});
