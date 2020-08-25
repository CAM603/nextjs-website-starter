// Tools
import { useRouter } from "next/router";
// Components
import Layout from "../../hoc/Layout/Layout";

export default function Award() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <Layout>
            <p>{name}</p>
        </Layout>
    );
}
