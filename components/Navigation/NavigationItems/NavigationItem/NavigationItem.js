// Tools
import Link from "next/link";

export default function NavigaionItem(props) {
    return (
        <li>
            <Link href={props.slug}>
                <a>{props.children}</a>
            </Link>
        </li>
    );
}
