// Components
import Layout from "../hoc/Layout/Layout";
// Styles
import styled from "@emotion/styled";

export default function Home() {
    return (
        <Layout>
            <HomeStyled>
                <h1>Hello World</h1>
            </HomeStyled>
        </Layout>
    );
}

const HomeStyled = styled.section`
    max-width: 1200px;

    h1 {
        font-size: 3rem;
    }
`;
