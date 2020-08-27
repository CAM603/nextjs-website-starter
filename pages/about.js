// Components
import Layout from "../hoc/Layout/Layout";
// Styles
import styled from "@emotion/styled";

export default function About() {
    return (
        <Layout>
            <AboutStyled>
                <h1>About Page</h1>
            </AboutStyled>
        </Layout>
    );
}

const AboutStyled = styled.section`
    max-width: 1200px;

    h1 {
        font-size: 3rem;
    }
`;
