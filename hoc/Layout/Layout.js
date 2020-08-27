// Tools
import { useState } from "react";
// Components
import Aux from "../Aux/Aux";
import Header from "../../components/Navigation/Header/Header";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
// Styles
import { Box } from "reflexbox";

export default function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const closeSideDrawerHandler = () => setShowSideDrawer(false);

    const toggleSideDrawerHandler = () => setShowSideDrawer(!showSideDrawer);

    return (
        <Aux>
            <Header toggleSideDrawerHandler={toggleSideDrawerHandler} />
            <SideDrawer open={showSideDrawer} closed={closeSideDrawerHandler} />
            <Box variant="layout" as="main">
                {props.children}
            </Box>
            <Footer />
        </Aux>
    );
}
