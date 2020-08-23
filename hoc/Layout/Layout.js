import { useState } from "react";
// Components
import Aux from "../Aux/Aux";
import Header from "../../components/Header/Header";
import SideDrawer from "../../components/Header/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

export default function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    console.log(showSideDrawer);

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
