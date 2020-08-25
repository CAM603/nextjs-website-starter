// Tools
import Link from "next/link";
// Components
import Layout from "../../hoc/Layout/Layout";

export default function PortfolioPage() {
    return (
        <Layout>
            <p>Portfolio</p>
            <Link href="/portfolio/[name]" as="/portfolio/item1">
                <a>Item 1</a>
            </Link>
            <p>Item 2</p>
            <p>Item 3</p>
        </Layout>
    );
}
