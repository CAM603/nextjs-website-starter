// Components
import DrawerToggle from "../SideDrawer/DrawerToggle.js/DrawerToggle";
// Styles
import styled from "@emotion/styled";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function Header(props) {
    return (
        <HeaderStyled>
            <DrawerToggle clicked={props.toggleSideDrawerHandler} />
            <div>Logo</div>
            <nav className="desktopOnly">
                <NavigationItems />
            </nav>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    height: 56px;
    width: 100%;
    /* position: fixed; */
    top: 0;
    left: 0;
    background-color: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    nav {
        height: 100%;
    }

    @media (max-width: 499px) {
        .desktopOnly {
            display: none;
        }
    }
`;
