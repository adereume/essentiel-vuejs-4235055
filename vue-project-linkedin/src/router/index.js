import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Contact from "../view/Contact.vue";
import ProductDetails from "../view/ProductDetails.vue";
import NotFound from "../view/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/contactez-nous",
        name: "Contact",
        component: Contact,
        alias: "/contact"
    },
    {
        path: "/product/:nameProduct",
        name: "product-details",
        component: ProductDetails
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;