// Components
import Layout from "../hoc/Layout/Layout";
// Styles
import styled from "@emotion/styled";

export default function Contact() {
    return (
        <Layout>
            <ContactStyled>
                <h1>Contact</h1>
            </ContactStyled>
        </Layout>
    );
}

const ContactStyled = styled.section`
    max-width: 1200px;

    h1 {
        font-size: 3rem;
    }
`;
