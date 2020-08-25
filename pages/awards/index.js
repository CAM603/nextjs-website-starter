// Tools
import Link from "next/link";

// Components
import Layout from "../../hoc/Layout/Layout";

export default function AwardsPage() {
    return (
        <Layout>
            <p>Awards</p>
            <Link href="/awards/[name]" as="/awards/award1">
                <p>Award 1</p>
            </Link>
            <p>Award 2</p>
            <p>Award 3</p>
        </Layout>
    );
}
