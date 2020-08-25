// Tools
import Link from "next/link";

// Components
import Layout from "../../hoc/Layout/Layout";

export default function Awards() {
    return (
        <Layout>
            <p>Awards</p>
            <Link href="/awards/[name]" as="/awards/test">
                <p>Award 1</p>
            </Link>
            <p>Award 2</p>
            <p>Award 3</p>
        </Layout>
    );
}
