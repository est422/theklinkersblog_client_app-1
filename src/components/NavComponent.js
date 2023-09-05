import { Routes, Route } from "react-router-dom";
import ConstructionChemicals from "./ConstructionChemicals";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import IndexComponent from "./IndexComponent";
import PostsComponent from "./PostsComponent";
import ProductsComponent from "./ProductsComponent";


function NavComponent () {

    return(
        <>
        <HeaderComponent />
        <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/products" element={<ProductsComponent />} />
            <Route exact path="/constructionproducts" element={<ConstructionChemicals />} />
            <Route exact path="/blogs" element={<PostsComponent />} />
        </Routes>
        </>
    )
}

export default NavComponent;