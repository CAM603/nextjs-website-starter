import { useState } from "react";
// Components
import Aux from "../Aux/Aux";
import Header from "../../components/Navigation/Header/Header";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

export default function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const closeSideDrawerHandler = () => setShowSideDrawer(false);

    const toggleSideDrawerHandler = () => setShowSideDrawer(!showSideDrawer);

    return (
        <Aux>
            <Header toggleSideDrawerHandler={toggleSideDrawerHandler} />
            <SideDrawer open={showSideDrawer} closed={closeSideDrawerHandler} />
            <main>{props.children}</main>
            <Footer />
        </Aux>
    );
}
