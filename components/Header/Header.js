import Navigation from "./Navigation/Navigation";
import DrawerToggle from "./SideDrawer/DrawerToggle.js/DrawerToggle";

export default function Header(props) {
    return (
        <header>
            <DrawerToggle />
            <div>Logo</div>
            <Navigation />
        </header>
    );
}
