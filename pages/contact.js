// Components
import Layout from "../hoc/Layout/Layout";
// Styles
import styled from "@emotion/styled";

export default function Contact() {
    return (
        <Layout>
            <PageStyled>
                <h1>Contact</h1>
            </PageStyled>
        </Layout>
    );
}

const PageStyled = styled.div`
    max-width: 800px;
`;
