// Styles
import styled from "@emotion/styled";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

export default function Footer(props) {
    return (
        <FooterStyled>
            <div>
                <p>Logo</p>
            </div>
            <nav>
                <NavigationItems />
            </nav>
            <div>
                <p>Email</p>
                <p>LinkedIn</p>
            </div>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: black;
    color: white;
    height: 100px;
    padding: 20px;
`;
