import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CharacterBio from "../pages/CharacterBio";
import BlogPage from "../pages/BlogPage";
import ShopPage from "../pages/ShopPage";


function AppRoutes(props) {

    return (
        <Routes>
            <Route index element = {<HomePage {...props}/>}/>

            <Route path="/character-bio" element = {<CharacterBio {...props}/>}/>

            <Route path="/blog" element = {<BlogPage {...props}/>}/>

            <Route path="/shop" element = {<ShopPage {...props}/>}/>


        </Routes>
    )
}

export default AppRoutes;