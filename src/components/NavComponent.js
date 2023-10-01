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
import LoginComponent from "./LoginComponent";
import ProtectedRoute from "./ProtectedRoute";
import SanitaryWareComponent from "./SanitaryWareComponent";
import PaintComponent from "./PaintComponent";
import DoorLocksComponent from "./DoorLocksComponent";
import CeramicTilesComponent from "./CeramicTilesComponent";
import PostComponent from "./PostCompnent";
import ProjectsComponent from "./ProjectsComponent";

function NavComponent () {

    return(
        <>
        {/*  */}
        <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/about" element={<AboutUsComponent />}/>
            <Route exact path="/products" element={<ProductsComponent />} />
            <Route exact path="/projects" element={<ProjectsComponent />} />
            <Route exact path="/ppr" element={<PprComponent />} />
            <Route exact path="/sanitaryware" element={<SanitaryWareComponent />} />
            <Route exact path="/paint" element={<PaintComponent />} />
            <Route exact path="/doorlocks" element={<DoorLocksComponent />} />
            <Route exact path="/ceramictiles" element={<CeramicTilesComponent />} />
            <Route exact path="/construction" element={<ConstructionChemicals />} />
            <Route exact path="/blogs" element={<BlogsComponent />} />
            <Route exact path="/post/:id" element={<PostComponent />} />
            <Route element={<ProtectedRoute />}>
                <Route exact path="/addpost" element={<NewPostComponent />} />
                <Route exact path="/blogs/edit/:id" element={<UpdatePostComponent />} />
                <Route exact path="/blogs/delete/:id" element={<DeletePostComponent />} />
            </Route>
            <Route exact path="/contact" element={<ContactUsComponent />} />
            <Route exact path="/login" element={<LoginComponent />} />
        </Routes>
        </>
    )
}

export default NavComponent;