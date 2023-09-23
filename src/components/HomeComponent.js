import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HeroComponent from "./HeroComponent";
import IndexComponent from "./IndexComponent";
import PartnersComponent from "./PartnersComponent";
import PostsComponent from "./PostsComponent";

function HomeComponent () {

    return(
        <>
        
        <div className="page-wrapper">
            {/* <HeaderComponent /> */}
            <IndexComponent />
            {/* <FooterComponent /> */}
        </div>
        
        </>
        )
}

export default HomeComponent;