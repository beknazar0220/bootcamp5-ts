import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact";

const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/contact",
        element: <Contact/>
    },
])

export default myRouter