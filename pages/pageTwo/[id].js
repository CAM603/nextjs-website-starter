// Tools
import { useRouter } from "next/router";
// Components
import Layout from "../../hoc/Layout/Layout";

export default function Item() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <p>{id}</p>
        </Layout>
    );
}
