// Styles
import styled from "@emotion/styled";
// Components
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems(props) {
    return (
        <ListStyled>
            <NavigationItem slug="/about">About</NavigationItem>
            <NavigationItem slug="/contact">Contact</NavigationItem>
            <NavigationItem slug="/pageOne">Page 1</NavigationItem>
            <NavigationItem slug="/pageTwo">Page 2</NavigationItem>
        </ListStyled>
    );
}

const ListStyled = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    flex-flow: column;
    height: 100%;

    @media (min-width: 500px) {
        flex-flow: row;
    }
`;
