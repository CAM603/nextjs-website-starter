// Tools
import Link from "next/link";
// Components
import Layout from "../../hoc/Layout/Layout";

export default function PageOne() {
    return (
        <Layout>
            <h1>Page One</h1>
            <Link href="/pageOne/[id]" as="/pageOne/1">
                <a>Item 1</a>
            </Link>
            <p>Item 2</p>
            <p>Item 3</p>
        </Layout>
    );
}
