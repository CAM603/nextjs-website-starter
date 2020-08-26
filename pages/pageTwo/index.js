// Tools
import Link from "next/link";

// Components
import Layout from "../../hoc/Layout/Layout";

export default function PageTwo() {
    return (
        <Layout>
            <h1>Page Two</h1>
            <Link href="/pageTwo/[name]" as="/pageTwo/1">
                <a>Item 1</a>
            </Link>
            <p>Item 2</p>
            <p>Item 3</p>
        </Layout>
    );
}
