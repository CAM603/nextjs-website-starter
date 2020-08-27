// Components
import Layout from "../../hoc/Layout/Layout";
// Tools
import Link from "next/link";
// Styles
import styled from "@emotion/styled";

export default function PageOne() {
    return (
        <Layout>
            <PageStyled>
                <h1>Page One</h1>
                <Link href="/pageOne/[id]" as="/pageOne/1">
                    <a>Item 1</a>
                </Link>
                <p>Item 2</p>
                <p>Item 3</p>
            </PageStyled>
        </Layout>
    );
}

const PageStyled = styled.section`
    max-width: 1200px;

    h1 {
        font-size: 3rem;
    }
`;
