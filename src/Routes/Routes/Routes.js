import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import CategoriesDetails from "../../Pages/Home/Categories/CategoriesDetails";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <CategoriesDetails></CategoriesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
]);

export default router;