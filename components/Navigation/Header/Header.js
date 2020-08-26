// Tools
import Link from "next/link";

// Components
import DrawerToggle from "../SideDrawer/DrawerToggle.js/DrawerToggle";
// Styles
import styled from "@emotion/styled";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function Header(props) {
    return (
        <HeaderStyled>
            <DrawerToggle clicked={props.toggleSideDrawerHandler} />
            <div>
                <Link href="/">
                    <a>Logo</a>
                </Link>
            </div>
            <nav className="desktopOnly">
                <NavigationItems />
            </nav>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 90;
    border-bottom: 1px solid #eaeaea;
    background-color: white;

    nav {
        height: 100%;
    }

    @media (max-width: 499px) {
        .desktopOnly {
            display: none;
        }
    }
`;
