import { Routes, Route } from 'react-router-dom';
import {Layout} from "../components/Layout";
import Home from "../page/Home";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
            </Route>
        </Routes>
    );
}

export default MainRoutes;