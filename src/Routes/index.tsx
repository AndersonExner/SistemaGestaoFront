import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>

            </Route>
        </Routes>
    )
};