// Components
import Aux from "../../../hoc/Aux/Aux";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
// Styles
import styled from "@emotion/styled";

export default function SideDrawer(props) {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <SideDrawerStyled>
                <div className={attachedClasses.join(" ")}>
                    <div>Logo</div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            </SideDrawerStyled>
        </Aux>
    );
}

const SideDrawerStyled = styled.div`
    .SideDrawer {
        position: fixed;
        width: 280px;
        max-width: 70%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 200;
        background-color: white;
        padding: 32px 16px;
        box-sizing: border-box;
        transition: transform 0.3s ease-out;
    }

    @media (min-width: 500px) {
        .SideDrawer {
            display: none;
        }
    }

    .Open {
        transform: translateX(0);
    }

    .Close {
        transform: translateX(-100%);
    }

    .Logo {
        height: 11%;
        margin-bottom: 32px;
    }
`;
