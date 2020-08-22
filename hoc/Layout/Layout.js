import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import SideDrawer from "../../components/Header/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

export default function Layout(props) {
    return (
        <Aux>
            <Header />
            <SideDrawer />
            <main>{props.children}</main>
            <Footer />
        </Aux>
    );
}
