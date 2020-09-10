import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Products from "../views/Products.vue";
import AddProduct from "../views/Products/Add.vue";
import EditProduct from "../views/Products/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/product/:id",
    name: "Edit Product",
    component: EditProduct
  },
  {
    path: "/product/add",
    name: "Add Product",
    component: AddProduct
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
