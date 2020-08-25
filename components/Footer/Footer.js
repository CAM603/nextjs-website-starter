// Tools
import Link from "next/link";

// Styles
import styled from "@emotion/styled";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

export default function Footer(props) {
    return (
        <FooterStyled>
            <div>
                <Link href="/">
                    <a>Logo</a>
                </Link>
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
    padding: 20px;
`;
