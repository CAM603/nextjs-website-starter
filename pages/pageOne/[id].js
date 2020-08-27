// Components
import Layout from "../../hoc/Layout/Layout";
// Tools
import { useRouter } from "next/router";
// Styles
import styled from "@emotion/styled";

export default function Item() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <ItemStyled>
                <p>{id}</p>
            </ItemStyled>
        </Layout>
    );
}

const ItemStyled = styled.div``;
