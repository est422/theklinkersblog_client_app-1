import { Routes, Route } from "react-router-dom";
import AboutUsComponent from "./AboutUsComponent";
import ConstructionChemicals from "./ConstructionChemicals";
import ContactUsComponent from "./ContactUsComponent";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import IndexComponent from "./IndexComponent";
import PostsComponent from "./PostsComponent";
import ProductsComponent from "./ProductsComponent";
import BlogsComponent from "./BlogsComponent";
import PprComponent from "./PprComponent";
import NewPostComponent from "./NewPostComponent";
import UpdatePostComponent from "./UpdatePostComponent";
import DeletePostComponent from "./DeletePostComponent";

function NavComponent () {

    return(
        <>
        <HeaderComponent />
        <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/about" element={<AboutUsComponent />}/>
            <Route exact path="/products" element={<ProductsComponent />} />
            <Route exact path="/ppr" element={<PprComponent />} />
            <Route exact path="/construction" element={<ConstructionChemicals />} />
            <Route exact path="/blogs" element={<BlogsComponent />} />
            <Route exact path="/blogs/edit/:id" element={<UpdatePostComponent />} />
            <Route exact path="/blogs/delete/:id" element={<DeletePostComponent />} />
            <Route exact path="/addpost" element={<NewPostComponent />} />
            <Route exact path="/contact" element={<ContactUsComponent />} />
        </Routes>
        </>
    )
}

export default NavComponent;