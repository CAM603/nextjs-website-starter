// Styles
import styled from "@emotion/styled";

export default function DrawerToggle(props) {
    return (
        <DrawerToggleStyled onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </DrawerToggleStyled>
    );
}

const DrawerToggleStyled = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

    div {
        width: 90%;
        height: 3px;
        background-color: black;
    }

    @media (min-width: 500px) {
        display: none;
    }
`;
