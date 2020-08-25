// Tools
import { useRouter } from "next/router";
// Components
import Layout from "../../hoc/Layout/Layout";

export default function Portfolio() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <Layout>
            <p>{name}</p>
        </Layout>
    );
}
