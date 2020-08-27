// Tools
import Link from "next/link";

// Styles
import styled from "@emotion/styled";

export default function Footer(props) {
    return (
        <FooterStyled>
            <div>
                <Link href="/">
                    <a>Logo</a>
                </Link>
            </div>
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
    padding: 2.2rem;
    border-top: 1px solid #eaeaea;
`;
