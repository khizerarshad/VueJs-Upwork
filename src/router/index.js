import {
    createRouter,
    createWebHistory,
} from "vue-router"
import ChartPage from "../pages/ChartPage.vue";
import TablePage from "../pages/TablePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/chart",
            name: "chart",
            component: ChartPage
        },
        {
            path: "/table",
            alias: "/table",
            name: "table",
            component: TablePage
        },
    ]
})

export default router
