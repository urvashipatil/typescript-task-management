import Kel from "../store/kel.js";

const store= new Kel({
  projects: [
    { id: 1, name: "Ecommerce" },
    { id: 2, name: "Blog" },
  ],
});

export default store;
