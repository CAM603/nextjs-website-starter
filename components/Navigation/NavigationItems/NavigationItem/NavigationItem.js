// Tools
import Link from "next/link";
import { useRouter } from "next/router";
// Styles
import styled from "@emotion/styled";

export default function NavigaionItem(props) {
    const router = useRouter();

    return (
        <ListItemStyled>
            <Link href={props.slug}>
                <a className={router.pathname === props.slug ? "active" : ""}>
                    {props.children}
                </a>
            </Link>
        </ListItemStyled>
    );
}

const ListItemStyled = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;

    a {
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }

    a:hover,
    a:active,
    a.active {
        font-weight: bold;
    }

    @media (min-width: 500px) {
        margin: 0 10px;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;

        a {
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }

        a:hover,
        a:active,
        a.active {
            border-bottom: 4px solid black;
        }
    }
`;
