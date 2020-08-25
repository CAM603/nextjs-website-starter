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
        color: #8f5c2c;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }

    a:hover,
    a:active,
    a.active {
        color: yellow;
    }

    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;

        a {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }

        a:hover,
        a:active,
        a.active {
            background-color: #8f5c2c;
            border-bottom: 4px solid #40a4c8;
            color: white;
        }
    }
`;
